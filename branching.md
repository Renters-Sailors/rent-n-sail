# Monorepo CI/CD Incremental Build Strategy

This document explains how incremental builds, caching, and dependency tracking work in a monorepo containing multiple services (`backend`, `database`, and `frontend`) across different Git branches (`main`, `branch-a`, and `branch-b`).

---

## Overview

In a typical monorepo setup, building the entire project on every commit is inefficient. Instead, modern CI/CD pipelines use **selective/incremental builds** that:
1. Detect which components have changed relative to an origin or parent branch.
2. Rebuild only the modified components.
3. Skip builds (`skip build`) for unchanged services by leveraging cached artifacts or previous versions (`v0`, `v1`, etc.).

---

## 1. Single Branch Modifications (`branch-a`)

When a developer branches off `main` to create `branch-a` and modifies only a single component (e.g., the `frontend`), only that specific component triggers a rebuild.

```mermaid
sequenceDiagram
  participant main as main
  participant backend as backend
  participant database as database
  participant frontend as frontend
  participant branchA as branch-a<br/>(origin: main)

  opt production
    rect rgb(235, 235, 235, 0.1)
      rect rgb(200, 225, 255)
        Note over backend: v0
      end
      rect rgb(200, 225, 255)
        Note over database: v0
      end
      rect rgb(200, 225, 255)
        Note over frontend: v0
      end
    end
  end

  main->>branchA: checkout
  branchA->>frontend: change
  frontend->>branchA: built

  opt branch-a version
    rect rgb(235, 250, 235, 0.4)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(200, 225, 255)
        Note over database: v0<br/>skip build
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>rebuild
      end
    end
  end

  branchA->>main: merge

  opt prodcution version after merge
    rect rgba(235, 235, 235, 0.1)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(200, 225, 255)
        Note over database: v0<br/>skip build
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>rebuild
      end
    end
  end
```

### Key Takeaways:
- **Backend & Database:** Remain at `v0` and skip builds because no file changes were detected.
- **Frontend:** Upgraded from `v0` to `v1` via a rebuild.
- **Merge to Main:** The changes propagate cleanly to production, carrying over the updated frontend `v1`.

---

## 2. Multi-Level Branching & Cascading Changes (`branch-a` -> `branch-b`)

When working with feature branches derived from other feature branches (e.g., `branch-b` originating from `branch-a`), changes flow downstream. If `branch-b` introduces changes to the `database`, the build system must evaluate what needs updating relative to its parent.

```mermaid
sequenceDiagram

  participant main as main
  participant backend as backend
  participant database as database
  participant frontend as frontend
  participant branchA as branch-a<br/>(origin: main)
  participant branchB as branch-b<br/>(origin: branch-a)


  opt production
    rect rgb(235, 235, 235, 0.1)
      rect rgb(200, 225, 255)
        Note over backend: v0
      end
      rect rgb(200, 225, 255)
        Note over database: v0
      end
      rect rgb(200, 225, 255)
        Note over frontend: v0
      end
    end
  end

  main->>branchA: checkout
  branchA->>frontend: change
  frontend->>branchA: built
  Note over branchA: Changes made only in frontend <br> only frontend needs a rebuild
  

  opt commit (branch-a)
    rect rgb(235, 250, 235, 0.4)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(200, 225, 255)
        Note over database: v0<br/>skip build
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>rebuild
      end
    end
  end

  branchA->>branchB: checkout
  branchB->>database: change
  database->>branchB: built
  Note over branchB: Changes made only in database <br> only database needs a rebuild <br> the frontend is pulled from branch-a

  opt commit (branch-b)
    rect rgb(230, 240, 255, 0.4)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(255, 215, 170)
        Note over database: v1<br/>rebuild
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>skip build
      end
    end
  end

  branchB->>branchA: merge
  Note over branchA: after merge the database needs rebuild <br> since it was changed, no changes detected <br> in frontend so it isnt being rebuild

  opt branch-a build
    rect rgb(235, 250, 235, 0.4)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(255, 215, 170)
        Note over database: v1<br/>rebuild
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>skip build
      end
    end
  end

  branchA->>main: merge
  Note over main: after merging branch-a the changes <br> changes detected are in database and <br> frontend so it needs to be rebuilt

  opt production
    rect rgb(235, 235, 235, 0.4)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(255, 215, 170)
        Note over database: v1<br/>rebuild
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>rebuild
      end
    end
  end
```

### Flow Breakdown:
1. **`branch-a`**: Updates `frontend` (`v1`), skips backend/database.
2. **`branch-b`**: Branches off `branch-a`, updates `database` (`v1`), while inheriting the existing `frontend` (`v1`) without needing a frontend rebuild.
3. **Merging to `main`**: Cumulative changes from both branches (`database v1` and `frontend v1`) are integrated into production.

---

<div></div>

## 3. Pull Requests, Divergence, and Merge Conflicts Prevention

When parallel development occurs (e.g., `branch-a` receives further updates while `branch-b` is active), handling pull requests requires synchronization to avoid redundant or outdated builds.

```mermaid
sequenceDiagram
  participant main as main
  participant backend as backend
  participant database as database
  participant frontend as frontend
  participant branchA as branch-a<br/>(origin: main)
  participant branchB as branch-b<br/>(origin: branch-a)


  opt production
    rect rgb(235, 235, 235, 0.3)
      rect rgb(200, 225, 255)
        Note over backend: v0
      end
      rect rgb(200, 225, 255)
        Note over database: v0
      end
      rect rgb(200, 225, 255)
        Note over frontend: v0
      end
    end
  end

  main->>branchA: checkout
  branchA->>frontend: change
  frontend->>branchA: build

  opt commit (branch-a)
    rect rgb(235, 250, 235, 0.4)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(200, 225, 255)
        Note over database: v0<br/>skip build
      end
      rect rgb(205, 240, 205)
        Note over frontend: v2<br/>rebuild
      end
    end
  end

  branchA->>branchB: checkout
  branchB->>database: change
  database->>branchB: build

  opt commit (branch-b)
    rect rgb(230, 240, 255, 0.5)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(255, 215, 170)
        Note over database: v1<br/>rebuild
      end
      rect rgb(205, 240, 205)
        Note over frontend: v1<br/>skip build
      end
    end
  end

  branchA->>frontend: change
  frontend->>branchA: build

  opt commit (branch-a)
    rect rgb(235, 250, 235, 0.5)
      rect rgb(200, 225, 255)
        Note over backend: v0<br/>skip build
      end
      rect rgb(255, 215, 170)
        Note over database: v1<br/>skip build
      end
      rect rgb(205, 240, 205)
        Note over frontend: v2<br/>rebuild
      end
    end
  end

  opt pull request
    rect rgb(245, 245, 245, 0.1)
      branchB->>branchA: pull request
      Note over branchA: When pushing without pulling <br> frontend would be rebuild <br> because the outdated frontend <br> from branch-b would show as <br> differnce from branch-a frontend
      rect rgb(225, 225, 225, 0.4)
        rect rgb(200, 225, 255)
          Note over backend: v0<br/>skip build
        end
        rect rgb(255, 215, 170)
          Note over database: v1<br/>skip build
        end
        rect rgb(205, 240, 205)
          Note over frontend: v2 ≠ v1<br/>rebuild
        end
      end

      branchA->>branchB: merge
      branchB->>branchA: pull request
      rect rgb(225, 225, 255, 0.4)
        rect rgb(200, 225, 255)
          Note over backend: v0<br/>skip build
        end
        rect rgb(255, 215, 170)
          Note over database: v1<br/>skip build
        end
        rect rgb(205, 240, 205)
          Note over frontend: v2<br/>skip build
        end
      end
    end
  end
```

### Why Synchronization Matters:
- **Divergence (`v2 ≠ v1`)**: If `branch-a` updates frontend to `v2` while `branch-b` holds an older frontend (`v1`), attempting to merge without syncing will cause the CI system to detect a mismatch and force an unnecessary rebuild.
- **Resolution**: Pulling the latest changes from `branch-a` into `branch-b` aligns versions, allowing the pipeline to safely skip redundant builds (`frontend: v2 skip build`).
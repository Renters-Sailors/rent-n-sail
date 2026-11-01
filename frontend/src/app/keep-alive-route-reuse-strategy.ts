import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
  DetachedRouteHandle,
  Route,
} from '@angular/router';

/**
 * Keeps components of routes marked with `data: { keepAlive: true }` alive
 * when navigating away, and reattaches the same instance on return.
 */
@Injectable()
export class KeepAliveRouteReuseStrategy extends BaseRouteReuseStrategy {
  private readonly handles = new Map<Route, DetachedRouteHandle>();

  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.data?.['keepAlive'] === true;
  }

  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if (!route.routeConfig) return;
    if (handle) this.handles.set(route.routeConfig, handle);
    else this.handles.delete(route.routeConfig);
  }

  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig ? this.handles.has(route.routeConfig) : false;
  }

  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return route.routeConfig ? (this.handles.get(route.routeConfig) ?? null) : null;
  }
}

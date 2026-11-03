import secrets

from authtuna.core.database import User

# AuthTuna needs unique usernames, but people may pick the same name. The name they pick is
# stored with a random suffix, "Anna#3fa91c", and shown without it.
SUFFIX_SEPARATOR = "#"
SUFFIX_LENGTH = 7  # separator plus 6 hex digits
MAX_DISPLAY_NAME_LENGTH = 80 - SUFFIX_LENGTH  # AuthTuna's username column holds 80


def unique_username(display_name: str) -> str:
    return f"{display_name}{SUFFIX_SEPARATOR}{secrets.token_hex(3)}"


def display_name(user: User) -> str:
    """The name the user picked; accounts from before suffixes show their full username."""
    name, separator, _ = user.username.rpartition(SUFFIX_SEPARATOR)
    return name if separator else user.username

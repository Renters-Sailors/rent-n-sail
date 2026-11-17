from datetime import time
from typing import Annotated

from pydantic import PlainSerializer

# A real `time` in Python and in the database; "HH:MM" on the wire.
ClockTime = Annotated[
    time,
    PlainSerializer(
        lambda value: value.strftime("%H:%M"), return_type=str, when_used="json"
    ),
]

from pydantic import BaseModel


class Track(BaseModel):
    id: str
    name: str
    popularity: float
    duration_ms: int
    explicit: int
    artists: str
    id_artists: str
    release_date: str
    danceability: float
    energy: float
    key: float
    loudness: float
    mode: float
    speechiness: float
    acousticness: float
    instrumentalness: float
    liveness: float
    valence: float
    tempo: float
    time_signature: float

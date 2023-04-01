from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

from src.services.TrackService import TrackService

router = APIRouter(
    prefix="/track",
    tags=["track"],
)


@router.get("/{track_id}")
async def get_song_recommendations(track_id: str):
    try:
        response = TrackService.get_song_recommendations(track_id)
        print(response)
        if isinstance(response, Exception):
            return HTTPException(detail={"error": str(response)}, status_code=404)
        return JSONResponse(content=response, status_code=200)
    except Exception as e:
        return HTTPException(detail={"error": str(e)}, status_code=500)

from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse

from src.services.TrackService import TrackService

router = APIRouter(
    prefix="/track",
    tags=["track"],
)


@router.get("/")
async def get_all_tracks(page: int = Query(None)):
    try:
        required_page = page if page is not None else 0
        response = TrackService.get_all_tracks(required_page)
        return JSONResponse(content=response, status_code=200)
    except Exception as e:
        return HTTPException(detail={"error": str(e)}, status_code=500)


@router.get("/{track_id}")
async def get_track(track_id: str):
    try:
        response = TrackService.get_track(track_id)
        if isinstance(response, Exception):
            return HTTPException(detail={"error": str(response)}, status_code=404)
        return JSONResponse(content=response, status_code=200)
    except Exception as e:
        return HTTPException(detail={"error": str(e)}, status_code=500)


@router.get("/prediction/{track_id}")
async def get_track_recommendations(track_id: str):
    try:
        response = TrackService.get_track_recommendations(track_id)
        if isinstance(response, Exception):
            return HTTPException(detail={"error": str(response)}, status_code=404)
        return JSONResponse(content=response, status_code=200)
    except Exception as e:
        return HTTPException(detail={"error": str(e)}, status_code=500)

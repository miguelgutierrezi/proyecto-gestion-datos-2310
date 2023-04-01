from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter(
    prefix="/song",
    tags=["song"],
    responses={404: {"description": "Not found"}},
)


@router.get("/{song_id}")
async def get_hello_world(song_id: str):
    return JSONResponse(content={"message": "Hello world" + song_id}, status_code=201)

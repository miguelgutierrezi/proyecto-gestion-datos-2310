from src.repositories.TrackRepository import TrackRepository


class TrackService:

    @staticmethod
    def get_song_recommendations(track_id: str):
        track_response = TrackRepository.get_track_by_id(track_id)

        if track_response is None:
            return Exception(f"""Not found track with id {track_id}""")

        return track_response

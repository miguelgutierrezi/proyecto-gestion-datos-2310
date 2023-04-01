from src.models.TrackRecommendationModel import TrackRecommendationModel
from src.repositories.TrackRepository import TrackRepository


class TrackService:

    @staticmethod
    def get_all_tracks(page: int, query: str):
        return TrackRepository.get_all_tracks(page, query)

    @staticmethod
    def get_track(track_id: str):
        track_response = TrackRepository.get_track_by_id(track_id)

        if track_response is None:
            return Exception(f"""Not found track with id {track_id}""")

        return track_response

    @staticmethod
    def get_track_recommendations(track_id: str):
        track_response = TrackRepository.get_track_by_id(track_id)

        if track_response is None:
            return Exception(f"""Not found track with id {track_id}""")

        return TrackRecommendationModel.get_track_recommendations(track_id)

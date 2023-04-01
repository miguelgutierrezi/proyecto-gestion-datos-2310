import pandas as pd
from google.oauth2 import service_account

TRACKS_TABLE_NAME = "GESTION.TRACKS_mdfh"

credentials = service_account.Credentials.from_service_account_file(
    "./resources/proyecto-gestion-2310.json", scopes=["https://www.googleapis.com/auth/cloud-platform"])


class TrackRepository:

    @staticmethod
    def get_all_tracks(page: int, query: str):
        page_size = 20
        offset = (page - 1) * page_size

        query = f"""
        SELECT id, name, duration_ms, artists, release_date
        FROM `proyecto-gestion-2310.{TRACKS_TABLE_NAME}`
        WHERE name LIKE '%{query}%'
        LIMIT {page_size}
        OFFSET {offset}
        """

        df = pd.read_gbq(query, credentials=credentials)

        results = []

        for value in df.values.tolist():
            results.append(dict(zip(df.columns, value)))

        return results

    @staticmethod
    def get_track_by_id(track_id):
        query = f"""SELECT * FROM `proyecto-gestion-2310.{TRACKS_TABLE_NAME}` WHERE id = '{track_id}' LIMIT 1"""
        df = pd.read_gbq(query, credentials=credentials)

        if df.empty:
            return None
        else:
            return df.iloc[0].to_dict()

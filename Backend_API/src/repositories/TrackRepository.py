import pandas as pd
from google.oauth2 import service_account

TRACKS_TABLE_NAME = "GESTION.TRACKS_mdfh"

credentials = service_account.Credentials.from_service_account_file(
    "./resources/proyecto-gestion-2310.json", scopes=["https://www.googleapis.com/auth/cloud-platform"])


class TrackRepository:
    @staticmethod
    def get_track_by_id(track_id):

        query = f"""SELECT * FROM `proyecto-gestion-2310.{TRACKS_TABLE_NAME}` WHERE id = '{track_id}' LIMIT 1"""
        df = pd.read_gbq(query, credentials=credentials)

        if df.empty:
            return None
        else:
            return df.iloc[0].to_dict()
        # print(Track(**df.iloc[0].to_dict()))

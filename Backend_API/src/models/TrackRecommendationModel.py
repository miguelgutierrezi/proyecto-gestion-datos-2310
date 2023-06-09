import pandas as pd
from annoy import AnnoyIndex

pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 100)


class TrackRecommendationModel:
    @staticmethod
    def get_track_recommendations(track_id):
        print("Leyendo CSV")
        url = "https://storage.googleapis.com/proyecto-gestion-2310/tracks_mod.csv"

        tracks_df = pd.read_csv(url)

        tracks_df.dropna(inplace=True)

        print("CSV leído y limpio, iniciando modelo")

        model_features = ["explicit", "danceability", "energy", "loudness", "speechiness", "acousticness", "liveness",
                          "valence"]

        annoy_loaded = AnnoyIndex(len(model_features), "euclidean")

        """ file_url = "https://storage.googleapis.com/proyecto-gestion-2310/spotify.ann"
        filename = "spotify.ann"
        r = requests.get(file_url, allow_redirects=True)
        open(filename, 'wb').write(r.content) """

        annoy_loaded.load("./resources/spotify.ann")

        print("Modelo cargado")

        track_index = tracks_df.loc[tracks_df['id'] == track_id].index[0]

        print(f"Index: {track_index}")

        neighbors = annoy_loaded.get_nns_by_item(track_index, 10)
        df = tracks_df.loc[neighbors]

        results = []

        for value in df.values.tolist():
            results.append(dict(zip(df.columns, value)))

        return results

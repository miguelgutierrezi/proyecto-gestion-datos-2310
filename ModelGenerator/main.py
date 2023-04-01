import pandas as pd
from annoy import AnnoyIndex

pd.set_option('display.max_rows', 100)
pd.set_option('display.max_columns', 100)
url = "https://storage.googleapis.com/proyecto-gestion-2310/tracks_mod.csv"


def generate_model():
    print("Leyendo CSV")

    tracks_df = pd.read_csv(url)

    tracks_df.dropna(inplace=True)

    print("CSV leído y limpio, iniciando modelo")

    model_features = ["explicit", "danceability", "energy", "loudness", "speechiness", "acousticness", "liveness",
                      "valence"]
    annoy = AnnoyIndex(len(model_features), "euclidean")

    print("Agregando elementos")
    for i in tracks_df.index:
        v = tracks_df.loc[i][model_features].values
        annoy.add_item(i, v)

    print("Elementos agregados")

    annoy.build(1000, n_jobs=-1)
    annoy.save("spotify.ann")

    print("Modelo cargado")


if __name__ == '__main__':
    generate_model()

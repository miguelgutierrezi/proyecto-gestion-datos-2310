# REST API (FastAPI) Modelo de recomendación de canciones

En caso de que no quiera realizar la instalación de este repositorio, use la siguiente URL, y pase al paso 6 de este documento.

Instrucciones de ejecución:

1. En caso de no tener virtualenv, instalarlo haciendo uso de `pip install virtualenv` o `pip3 install virtualenv`.
2. Crear el virtualenv para el proyecto `python -m venv env` o `python3 -m venv env`.
3. Activar el ambiente virtual creado. El comando dependera de su S.O. En caso de ser basado en Linux, use `source env/bin/activate`, en caso de ser Windows use: `.\env\Scripts\activate`.
4. Instale las dependencias requeridas haciendo uso de: `pip install -r requirements.txt`.
5. Inicie el servidor con: `uvicorn src.main:app --reload`.
6. Para testear el modelo use el siguiente endpoint:

```
GET /song/{song_id} HTTP/1.1
```
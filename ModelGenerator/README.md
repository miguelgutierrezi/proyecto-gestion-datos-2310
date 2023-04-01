# Generación de Modelo Annoy

Instrucciones de ejecución:

1. Será necesario contar con un compilador de C++ para poder instalar annoy, por lo que requiere lo siguiente: 
- En ambientes Windows usar este enlace [Windows Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- En ambientes basados en Linux ejecutar `sudo apt-get install build-essential`
2. En caso de no tener virtualenv, instalarlo haciendo uso de `pip install virtualenv` o `pip3 install virtualenv`.
3. Crear el virtualenv para el proyecto `python -m venv env` o `python3 -m venv env`.
4. Activar el ambiente virtual creado. El comando dependera de su S.O. En caso de ser basado en Linux, use `source env/bin/activate`, en caso de ser Windows use: `.\env\Scripts\activate`.
5. Instale las dependencias requeridas haciendo uso de: `pip install -r requirements.txt`.
6. Ejecute el archivo main con `python main.py`.
7. Esto generará un archivo `spotify.ann`. Use este archivo para copiarlo y pegarlo en la ruta `../Backend_API/resources/apotify.ann` si es que no existe ya.
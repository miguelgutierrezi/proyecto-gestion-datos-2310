FROM python:3.9-slim-buster
WORKDIR /app
COPY requirements.txt .
RUN apt-get update && apt-get install -y g++
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8080

CMD uvicorn src.main:app --host 0.0.0.0 --port 8080
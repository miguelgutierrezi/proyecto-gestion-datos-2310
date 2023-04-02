import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private static BASE_URL: string = `${environment.apiUrl}track/`;

  constructor(
    private http: HttpClient
  ) { }

  public getAllTracks(page: number, query: string): Observable<any> {
    return this.http.get(`${TrackService.BASE_URL}?page=${page}&query=${query}`);
  }

  public getTrackById(trackId: string): Observable<any> {
    return this.http.get(`${TrackService.BASE_URL}${trackId}`);
  }

  public getTrackPredictions(trackId: string): Observable<any> {
    return this.http.get(`${TrackService.BASE_URL}prediction/${trackId}`);
  }
}

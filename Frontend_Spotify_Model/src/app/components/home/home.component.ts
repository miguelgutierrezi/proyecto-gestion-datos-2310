import {Component, OnInit} from '@angular/core';
import {TrackService} from "../../services/track.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  query: string = '';
  tracks: Array<any> = [];
  isLoading: boolean = false;

  constructor(
    private trackService: TrackService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getTracks();
  }

  get isPreviousField() {
    return this.page === 1;
  }

  get isNextPage() {
    return this.tracks.length < 20;
  }

  public getTracks(): void {
    this.isLoading = true;
    this.trackService.getAllTracks(this.page, this.query).subscribe({
      next: (res: any) => {
        this.tracks = res;
        this.isLoading = false;
      },
      error: err => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  public getNextPage(): void {
    this.page++;
    this.getTracks();
  }

  public getPreviousPage(): void {
    this.page--;
    this.getTracks();
  }

  public searchWithQuery(): void {
    this.page = 1;
    this.getTracks();
  }

  public getDurationValue(track: any): number {
    return Math.floor(track.duration_ms/60000);
  }

  public navigateToTrackDetail(trackId: string) {
    this.router.navigate(['/track', trackId])
  }

}

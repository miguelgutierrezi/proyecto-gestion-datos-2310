import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TrackService} from "../../services/track.service";

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.sass']
})
export class TrackDetailComponent implements OnChanges {

  @Input() trackId!: string;
  isLoading: boolean = false;
  track: any;

  constructor(
    private trackService: TrackService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trackId']) {
      this.getTrackDetails();
    }
  }

  public getTrackDetails(): void {
    this.isLoading = true;
    this.trackService.getTrackById(this.trackId).subscribe({
      next: res => {
        this.track = res;
        this.isLoading = false;
      },
      error: err => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  public getDurationValue(track: any): number {
    return Math.floor(track.duration_ms/60000);
  }

}

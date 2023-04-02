import {Component, Input, OnInit} from '@angular/core';
import {TrackService} from "../../services/track.service";

@Component({
  selector: 'app-track-prediction',
  templateUrl: './track-prediction.component.html',
  styleUrls: ['./track-prediction.component.sass']
})
export class TrackPredictionComponent implements OnInit {

  @Input() trackId!: string;
  isLoading: boolean = false;
  trackPredictions: Array<any> = [];

  constructor(
    private trackService: TrackService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.trackService.getTrackPredictions(this.trackId).subscribe({
      next: (res) => {
        this.trackPredictions = res;
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

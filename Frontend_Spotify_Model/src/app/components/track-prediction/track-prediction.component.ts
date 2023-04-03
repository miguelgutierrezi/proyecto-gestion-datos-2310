import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TrackService} from "../../services/track.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-track-prediction',
  templateUrl: './track-prediction.component.html',
  styleUrls: ['./track-prediction.component.sass']
})
export class TrackPredictionComponent implements OnInit, OnChanges {

  @Input() trackId!: string;
  isLoading: boolean = false;
  trackPredictions: Array<any> = [];

  constructor(
    private trackService: TrackService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrackPredictions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trackId']) {
      this.getTrackPredictions();
    }
  }

  public getTrackPredictions(): void {
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

  public navigateToTrackDetail(trackId: string) {
    this.router.navigateByUrl(`/track/${trackId}`);
  }

}

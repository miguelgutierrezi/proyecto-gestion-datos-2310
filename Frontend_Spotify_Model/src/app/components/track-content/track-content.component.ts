import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-track-content',
  templateUrl: './track-content.component.html',
  styleUrls: ['./track-content.component.sass']
})
export class TrackContentComponent implements OnInit {

  trackId: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.trackId = params.get('trackId') || '';
      console.log(this.trackId);
    });
  }

}

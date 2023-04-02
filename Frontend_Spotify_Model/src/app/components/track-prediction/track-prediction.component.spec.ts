import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPredictionComponent } from './track-prediction.component';

describe('TrackPredictionComponent', () => {
  let component: TrackPredictionComponent;
  let fixture: ComponentFixture<TrackPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

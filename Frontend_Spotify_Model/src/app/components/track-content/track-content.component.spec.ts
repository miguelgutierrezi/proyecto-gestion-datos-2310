import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackContentComponent } from './track-content.component';

describe('TrackContentComponent', () => {
  let component: TrackContentComponent;
  let fixture: ComponentFixture<TrackContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

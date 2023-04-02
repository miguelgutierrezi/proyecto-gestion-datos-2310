import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrackService} from "./services/track.service";
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { TrackDetailComponent } from './components/track-detail/track-detail.component';
import { TrackPredictionComponent } from './components/track-prediction/track-prediction.component';
import { TrackContentComponent } from './components/track-content/track-content.component';
import {NgxPaginationModule} from "ngx-pagination";
import { LoaderComponent } from './components/loader/loader.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackDetailComponent,
    TrackPredictionComponent,
    TrackContentComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    TrackService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

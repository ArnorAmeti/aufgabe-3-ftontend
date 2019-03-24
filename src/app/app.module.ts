import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {VideoGalleryComponent} from './video-gallery/video-gallery.component';
import {AudioListComponent} from './audio-list/audio-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChatComponent} from './chat/chat.component';
import {FileUploadModule, FileUploadService} from "angular-sd-file-upload";
import {HttpClientModule} from "@angular/common/http";
import { VideoplayerComponent } from './videoplayer/videoplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImageGalleryComponent,
    VideoGalleryComponent,
    AudioListComponent,
    DashboardComponent,
    ChatComponent,
    VideoplayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
  ],
  providers: [
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

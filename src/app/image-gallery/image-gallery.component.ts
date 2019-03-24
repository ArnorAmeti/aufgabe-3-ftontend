import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  images: string[] = [];

  constructor(private http: HttpClient) {
    this.http.get<{ files: string[] }>('http://localhost:4000/api/files').subscribe((answer) => {
      answer.files.forEach(file => {
        this.images.push('/static/' + file);
      });
    });
  }

  ngOnInit() {
  }

}


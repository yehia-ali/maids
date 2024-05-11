import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input({ required: true }) image?: any[] | string = [];
  @Input() widthImg?: string = '';
  @Input() heightImg?: string;
  @Input() class?: string;
  @Input({ required: true }) alt?: string;
}

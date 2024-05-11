import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ImageComponent],
})
export class ImageModule {}

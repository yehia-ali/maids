import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ImageModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}

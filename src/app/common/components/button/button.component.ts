import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type?: string = 'button';
  @Input({ required: true }) id: string = 'button';
  @Input() value: string = '';
  @Input() disabled?: boolean;
  @Input() icon?: string;
  @Input() class!: string;
  @Input() bgColor: string = '';
  @Input() fontColor: string = '';
  @Input() borderColor: string = this.bgColor;
  @Input() radiusSize: string = '';
  @Input() paddingSize!: string;
  @Input() image = '';
  @Input() showImage?: boolean = false;

}

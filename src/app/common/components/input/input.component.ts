import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) inputFormControlName!: string;
  @Input({ required: true }) id!: string;
  @Input() class!: string;
  @Input({ required: true }) type?: string = 'text';
  @Input({ required: true }) name?: string = 'search';
  @Input() placeholder: string = 'Search...';
  @Input() min?: number;
  @Input() max?: number;
  @Input() minlength?: number;
  @Input() maxlength?: number;
  @Input() checked?: boolean;
  @Input() disabled: boolean = false;
  @Input() readonly?: boolean;
  @Input() value?: string = '';
  @Input() autocomplete?: string | boolean = 'on';
  @Input() autofocus: boolean = false;
  @Input() required: boolean = false;
  @Input() isLabelShown: boolean = true;
  @Input() label!: string;
  @Input() inputMode?: string;
  @Input() icon?: string;
  @Input() backgroundColor?: string;
  @Input() backgroundInput?: string;
  @Input() textAlign?: string = 'start';
  @Input() border?: string;
  @Input() borderRadius!: string;

  errorMessages: Record<string, string> = {
    required: 'please enter rquired inputs',
    email: 'The email you entered is invalid. Example: jr@example.com',
  };

  constructor() {}

  controlName() {
    return this.formGroup?.controls[this.inputFormControlName];
  }

  ngOnInit(): void {
    if (this.minlength) {
      this.errorMessages[
        'minlength'
      ] = `Input must be atleast ${this.minlength} digits & unique.`;
    }
    if (this.maxlength) {
      this.errorMessages[
        'maxlength'
      ] = `Input must be maximum ${this.maxlength} digits & unique.`;
    }
    if (this.disabled) {
      this.controlName()?.disable();
    } else {
      this.controlName()?.enable();
    }
  }
}

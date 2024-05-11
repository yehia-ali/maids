import { Component } from '@angular/core';
import { ToastrService } from './common/components/toastr/toastr.service';
import { IToastr } from './common/components/toastr/toastr.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maids';
  toastrErrors!: any[];
  toastrData: IToastr = {
    title: '',
    message: '',
    type: 'error',
  };

  constructor(
    private toastrService: ToastrService,
  ) {
  }
  ngOnInit(): void {
    this.toastrService.toastrData.subscribe((toastrData: IToastr) => {
      this.toastrData = toastrData;
      setTimeout(
        () => (this.toastrData = { title: '', message: '', type: '' }),
        5000
      );
    });

    this.toastrService.alertImportErrors.subscribe((result: any) => {
      this.toastrErrors = result?.errors;

      setTimeout(() => (this.toastrErrors = []), 5000);
    });

  }
}

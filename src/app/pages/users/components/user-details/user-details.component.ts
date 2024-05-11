import { Component } from '@angular/core';
import { BreadCrumbModule } from '../../../../common/components/breadcrumb/breadcrumb.module';
import { ButtonModule } from '../../../../common/components/button/button.module';
import { ImageModule } from '../../../../common/components/image/image.module';
import { IBreadCrumb } from '../../../../common/components/breadcrumb/breadcrumb.interface';
import { UsersService } from '../../services/users.service';
import { ToastrService } from '../../../../common/components/toastr/toastr.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpinnerModule } from '../../../../common/components/spinner/spinner.module';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterModule,
    ButtonModule,
    ImageModule,
    BreadCrumbModule,
    SpinnerModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  breadCrumbData: IBreadCrumb[] = [];
  userData!: any;
  isloading: boolean = true;
  constructor(
    private usersService: UsersService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {

    this.breadCrumbData = [
      {
        value: 'Home',
        url: `/users`,
      },
      {
        value: 'users',
        url: ``,
      },
    ];
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.getUserDetails(params?.id)
      }
    );

  }
  getUserDetails(id: any) {
    this.usersService.getUserByID(id).subscribe({
      next: (response: any) => {
        this.userData = response?.data;
        this.isloading = false;
     },
      error: (error: any) => this.showAlertNotify('', error?.message, 'error'),
    });
  }

  private showAlertNotify(title: string, message: string, type?: string) {
    this.toastrService.toastrData.next({
      title,
      message,
      type: type,
    });

    setTimeout(
      () => this.toastrService.toastrData.next({ title: '', message: '' }),
      3000
    );
  }

}

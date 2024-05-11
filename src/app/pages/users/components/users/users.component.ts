import { Component, OnInit } from '@angular/core';
import { ImageModule } from '../../../../common/components/image/image.module';
import { InputModule } from '../../../../common/components/input/input.module';
import { TableModule } from '../../../../common/components/table/table.module';
import { ButtonModule } from '../../../../common/components/button/button.module';
import { UsersService } from '../../services/users.service';
import { IBreadCrumb } from '../../../../common/components/breadcrumb/breadcrumb.interface';
import {  usersOptionsI, usersTableStrctureDD } from '../../interfaces/users.interface';
import { ToastrService } from '../../../../common/components/toastr/toastr.service';
import { BreadCrumbModule } from '../../../../common/components/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '../../../../common/components/spinner/spinner.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Observable, delay, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule,
    InputModule,
    ButtonModule,
    TableModule,
    ImageModule,
    BreadCrumbModule,
    SpinnerModule,
    NgxPaginationModule 
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  breadCrumbData: IBreadCrumb[] = [];
  usersOptions:usersOptionsI  = {
    page: 1
  };
  usersTableStrcture = usersTableStrctureDD;
  allUsersData: any;
  isloading: boolean = true;

constructor(
    private usersService: UsersService,
    private toastrService: ToastrService,
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
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers(this.usersOptions).subscribe({
      next: (response: any) => {
        this.isloading = false;
        this.allUsersData = response;
        this.usersTableStrcture.body = response?.body;
      },
      error: (error: any) => this.showAlertNotify( error?.message, 'danger'),
    });
  }
  
  onPageChange(event: number): void {
    debugger
    this.usersOptions.page = event;
    this.getAllUsers();
  }
  
private showAlertNotify( message: string, type?: string) {
    this.toastrService.toastrData.next({
      message,
      type: type,
    });

    setTimeout(
      () => this.toastrService.toastrData.next({  message: '' }),
      3000
    );
  }

}

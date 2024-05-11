import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/users/components/users/users.component').then(
        c => c.UsersComponent
      ),
    title: 'Maids | Users',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/components/users/users.component').then(
        c => c.UsersComponent
      ),
    title: 'Maids | Users',
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./pages/users/components/user-details/user-details.component').then(
        c => c.UserDetailsComponent
      ),
    title: 'Maids | Users',
  },


  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

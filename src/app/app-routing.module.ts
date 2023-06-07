import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () =>
      //carga perezosa
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'user',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DishPageComponent } from './dish-page/dish-page.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'dish', component: DishPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

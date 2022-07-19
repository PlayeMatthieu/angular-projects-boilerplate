import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';

export const routes: Routes = [
  // Main path
  { path: '', component: HomePageComponent },
];
@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class AppRouting {}

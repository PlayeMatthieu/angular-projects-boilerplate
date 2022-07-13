import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // Main path
  { path: '', component: AppComponent },
];
@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class AppRouting {}

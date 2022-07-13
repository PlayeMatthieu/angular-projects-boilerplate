import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting, routes } from '../app.routing';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [CommonModule, AppRouting, RouterModule.forRoot(routes)],
  exports: [],
})
export class SharedModule {}

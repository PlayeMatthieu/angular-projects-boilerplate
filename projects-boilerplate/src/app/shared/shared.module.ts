import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting, routes } from '../app.routing';
import { RouterModule } from '@angular/router';
import { NavigationSidebarComponent } from './layout/navigation-sidebar/navigation-sidebar.component';

@NgModule({
  declarations: [NavigationSidebarComponent],
  imports: [CommonModule, AppRouting, RouterModule.forRoot(routes)],
  exports: [],
})
export class SharedModule {}

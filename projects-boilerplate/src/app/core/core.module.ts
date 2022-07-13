import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavigationSidebarComponent, NavbarComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavigationSidebarComponent, NavbarComponent],
})
export class CoreModule {}

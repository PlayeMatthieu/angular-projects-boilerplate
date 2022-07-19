import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  faHouse,
  faAddressBook,
  faBoxArchive,
} from '@fortawesome/free-solid-svg-icons';
import { AsideNavlink } from '../../models/AsideNavLink.model';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationSidebarComponent implements OnInit {
  navigationLinks: AsideNavlink[] = [
    {
      path: '',
      name: 'Home',
      icon: faHouse,
    },
    {
      path: 'planner',
      name: 'Planner',
      icon: faAddressBook,
    },
    {
      path: 'calc',
      name: 'Calc',
      icon: faBoxArchive,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

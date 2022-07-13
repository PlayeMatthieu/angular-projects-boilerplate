import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

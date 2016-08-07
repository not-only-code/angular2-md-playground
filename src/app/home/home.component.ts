import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Dir } from '@angular2-material/core/rtl/dir';
import { MdButton } from '@angular2-material/button/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MdIcon } from '@angular2-material/icon/icon';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  directives: [
    Dir,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    ROUTER_DIRECTIVES
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

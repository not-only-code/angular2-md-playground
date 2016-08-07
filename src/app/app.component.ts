import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: [ 'app.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}

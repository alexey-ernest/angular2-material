import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [MD_BUTTON_DIRECTIVES]
})
export class AppComponent { }

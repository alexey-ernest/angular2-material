import { Component } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  providers: [MdIconRegistry],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_CARD_DIRECTIVES
  ]
})
export class AppComponent { }

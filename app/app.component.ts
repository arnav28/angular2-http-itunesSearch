import { Component } from '@angular/core';
import {Search} from './search/search.component'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [Search],
  templateUrl: 'app.component.html',
  styleUrls: ['app.css']
})

export class AppComponent { }

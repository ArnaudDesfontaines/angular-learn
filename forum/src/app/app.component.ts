import { Component } from '@angular/core';
import {TabService} from "./tab.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forum';

  constructor(public service:TabService){
  }

}

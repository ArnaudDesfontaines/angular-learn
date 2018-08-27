import { Component, OnInit } from '@angular/core';
import {TabService} from "../tab.service";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(public service:TabService) { }

  ngOnInit() {
  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabChoice: any;

  constructor() { }

  isTopic(){
    this.tabChoice = "Topic";
    console.log(this.tabChoice);
  }

  isUser(){
    this.tabChoice = "User";
    console.log(this.tabChoice);
  }
}

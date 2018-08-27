import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface User {
  id: number;
  name: string;
  admin?: boolean;
  email: string;
  statement?: string; // Ouch !!
}


export interface Admin extends User {
  statement: string;
}

export interface IComment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
  score?:number;
}



export interface Topic {
  id?: number;
  title: string;
  content: string;
  comments: Array<IComment>;
  user: User;
  tags?: Array<String>;
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topics: Topic[];
  activeTopic: any;

  constructor(public http:HttpClient) {}

  fetchTopics(){
      this.http.get<any[]>('http://localhost:8000/api/topics')
        .subscribe((t: any[]) =>this.topics = t);
    }


    postService(comment:IComment,id){
      this.http.post('http://localhost:8000/api/comments/topic/'+ id, comment)
        .subscribe();
    }
    isActive(id){
    this.activeTopic = id;
    }




}

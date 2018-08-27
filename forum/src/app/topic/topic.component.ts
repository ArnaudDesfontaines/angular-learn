import {Component, Input, OnInit} from '@angular/core';
import {IComment, Topic, TopicService} from "../topic.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() topic:Topic;

  commentContent;

  constructor(public service:TopicService,
              public service2:UserService) { }

  ngOnInit() {
  }


  checkComment(topicId:number){

    this.service.postService({
      id:-1,
      user :this.service2.loggedPerson,
      content: this.commentContent,
    },topicId);
  }

}

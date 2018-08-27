import { Component, OnInit } from '@angular/core';
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-basic-topic-list',
  templateUrl: './basic-topic-list.component.html',
  styleUrls: ['./basic-topic-list.component.css']
})
export class BasicTopicListComponent implements OnInit {

  constructor(public service:TopicService) {
    service.fetchTopics()
  }

  ngOnInit() {
  }

}

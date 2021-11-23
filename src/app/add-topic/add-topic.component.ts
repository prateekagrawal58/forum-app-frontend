import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { TopicServiceService } from '../services/topic-service.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {

  topicTitle: string;
  topicContent: string;
  userData: any;
  isTopicSubmitted: boolean = false;

  constructor(
    private loginService: LoginService,
    private topicService: TopicServiceService
  ) { }

  ngOnInit(): void {
    this.userData = this.loginService.userData;
  }

  onSubmit(){
    console.log('topic ready to be added');
    console.log('title : ', this.topicTitle, ' - content : ', this.topicContent, ' - userId: ', this.userData.id, ' - date : ', Date.now());
    // call add Topic API
    const newTopic = {
      title: this.topicTitle,
      content: this.topicContent,
      userId:this.userData.id
    }
    
    this.topicService.addTopicByUserId(newTopic).then( (resp: any) => {
      console.log('add topic resp : ', resp);
      if(resp.statusCode == 1){
        this.isTopicSubmitted = true;
      }
    })
  }
}

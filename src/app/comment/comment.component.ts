import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../services/login/login.service';
import { TopicServiceService } from '../services/topic-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  userData:any;
  comments:any;
  userId:any;
  userIdData:any;
  comment:any;
  error;
  constructor(
    private topicServiceService:TopicServiceService,
    private loginService:LoginService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.userData = this.loginService.userData;
    console.log(this.userData);
    this.fetchComments();
    
  }

  fetchComments(){
    this.topicServiceService.getComment(this.data.topic.id).then( (resp: any) => {
      this.comments = resp.data;
      // console.log('topics resp : ', resp);
      console.log('topics in comp : ', this.comments);
    });
  }
  submit(){
    // debugger;
    if(this.comment==undefined){
      this.error='Comment should not be empty';
      return;
    }
    this.error='';
    const comment={
      description:this.comment,
      userId:this.userData.id,
      topicId:this.data.topic.id
    };
    this.topicServiceService.addComment(comment);
    this.comment = undefined;
    this.comments.push(comment);
  }

}

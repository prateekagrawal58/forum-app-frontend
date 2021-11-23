import { Component, OnInit } from '@angular/core';
// import { Topic } from '../models/Topic';
import { LoginService } from '../services/login/login.service';
import { TopicServiceService } from '../services/topic-service.service';
// import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  userData:any;

  // topicList:Topic[]=[];
  topicList:any;
  constructor(
    public dialog: MatDialog,
    private topicServiceService:TopicServiceService,
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    // this.userData =this.loginService.userData;
    this.userData = this.loginService.userData;
    console.log(this.userData);
    this.topicServiceService.getAllTopics().then( (resp: any) => {
      this.topicList = resp.data;
      console.log('topics resp : ', resp);
      console.log('topics in comp : ', this.topicList);
    });
  }

  openDialog(topic): void {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '750px',
      data: {topic: topic},
    });
  }
}

    //   {
    //     id: 1,
    //     userId:1,
    //     title: "My first post",
    //     content: "Just testing this out!",
    //     creationDate:'11/09/2020',
    //     lastUpdateDate:'22/11/2021'
    //   },
    //   {
    //     id: 2,
    //     userId:2,
    //     title: "What's your favorite front-end framework?",
    //     content: "My favorite is Angular. What do you enjoy working with?",
    //     creationDate:'11/09/2020',
    //     lastUpdateDate:'22/11/2021'
    //   },
    //   {
    //     id: 3,
    //     userId:3,
    //     title: "ngOnInit is great",
    //     content: "This lifecycle method gets called automatically upon component initialization!",
    //     creationDate:'11/09/2020',
    //     lastUpdateDate:'22/11/2021'
    //   },
    // ];
  

// function openDialog() {
//   throw new Error('Function not implemented.');
// }


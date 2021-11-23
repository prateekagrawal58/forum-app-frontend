import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

    url: any = 'http://localhost:8081/api/topics/display-all';
    addTopicUrl: any = 'http://localhost:8081/api/topics/add';
    getTopicByUserUrl:any = 'http://localhost:8081/api/topics/{userId}';
    addCommentUrl:any = 'http://localhost:8081/api/comments/add-comment';
    fetchComment:any='http://localhost:8081/api/comments/';
    errorSubject: any = new BehaviorSubject<any>(null);
    errorMessage: any = this.errorSubject.asObservable();
  
    constructor(
      private http: HttpClient,
      private router: Router,
    ) { }
  
  getAllTopics(){
    
    // http.get().topPromise()
    // log()
    // service
    // return this.http.get(url).toPromise();
    // this.topics = [
    return this.http.get(this.url).toPromise();
    // .then((res: any) => {
    //   console.log(res.data);
    //   return res.data;
    // });
  
  }

  getTopicByUserId(userId:any){
    return this.http.get(this.getTopicByUserUrl, userId).toPromise();
  }

  addTopicByUserId(newTopic: any){
    return this.http.post(this.addTopicUrl, newTopic).toPromise();
  }
  addComment(comment:any){
    return this.http.post(this.addCommentUrl, comment).toPromise();
  }
  getComment(topicId:any){
    return this.http.get(this.fetchComment+ topicId).toPromise();
  }
}
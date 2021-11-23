import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: any = 'http://localhost:8081/api/user/login';
  registerUrl: any = 'http://localhost:8081/api/user/register';
  errorSubject: any = new BehaviorSubject<any>(null);
  errorMessage: any = this.errorSubject.asObservable();
  userData:any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(Username: string, Password: string): any {
    this.http.post(this.url, { username: Username, password: Password }, httpOptions).toPromise().then((res: any) => {
      console.log("Logged-in!",res);
      if(res.statusCode == 1){
        // login success
        this.userData = res.data;
        console.log(res.data);
        this.router.navigate(['/topic']);
      }
      else{
        // error
      }
      // if (res && res.jwt) {
      //   sessionStorage.setItem('jwt', res.jwt);
      //   this.errorSubject.next(null);
      //   this.router.navigateByUrl('dashboard');
      // } else if (res.Message) {
      //   this.errorSubject.next(res.Message);
      // }
    });
  }

  register(Username: string, Password: string){
    return this.http.post(this.registerUrl, {username: Username, password: Password}).toPromise()
    .then((res: any) => {
      console.log('registered : ', res);
      
    });
  }

  logout(Username: string, Password: string): any {
    // this.http.post(this.url, { username: Username, password: Password }, httpOptions).toPromise().then((res: any) => {
    //   console.log("Logged-out!",res);
      // if(res.statusCode == 1){
        // login success
        this.userData = undefined;
        
        // console.log(res.data);
        this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }
}
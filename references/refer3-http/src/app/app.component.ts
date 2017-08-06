import { Component } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  memberName = '';

  constructor(private http: Http) {}

  findMember(id:string):void{
    this.http.get('http://localhost:8080/members/'+id)
      .subscribe(
        data => {
          console.log(" data: ", data.json());
          this.memberName = data.json().name;
        }
      );
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  addMember(name:string):void{
    this.http.post('http://localhost:8080/members'
      , JSON.stringify({name: name})
      , {headers: this.headers})
      .subscribe(
        data => {
          console.log(" data: ", data.json());
      });
  }
}

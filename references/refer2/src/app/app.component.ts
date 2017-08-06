import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 삽입식 바인딩
  title = 'app works!';

  // 프로퍼티 바인딩
  myStyle = {color:'blue', 'font-weight':800, 'font-size' : '0.7rem'};

  // 이벤트 바인딩
  evtBinding(): void {
    alert("헬로 월드?");
  }

  // 양방향 바인딩
  way2 = "way2..";



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project 6';
  public num:number = 1;

  add(){
    this.num++;
  }

  subtract(){
    this.num--;
  }
}

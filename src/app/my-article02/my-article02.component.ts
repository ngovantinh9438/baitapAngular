import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-article02',
  templateUrl: './my-article02.component.html',
  styleUrls: ['./my-article02.component.css']
})
export class MyArticle02Component{
  count: number=0;
 
  buttonClickedup() : void {
      this.count=this.count+1;
      console.log("Button Clicked")
  }
  buttonClickeddown() : void {
    this.count=this.count-1;
    console.log("Button Clicked")
  }
}

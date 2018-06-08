import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-article01',
  templateUrl: './my-article01.component.html',
  styleUrls: ['./my-article01.component.css']
})
export class MyArticle01Component{
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

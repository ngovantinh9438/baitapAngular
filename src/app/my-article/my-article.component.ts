import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.css']
})
export class MyArticleComponent{
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

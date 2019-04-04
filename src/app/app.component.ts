import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
items=[];
  constructor(){
     this.items = [
      {name: 'Item 1', value: '123'},
      {name: 'Item 2', value: '456'}
    ];
  }

  onSubmit(){
let tempItems=this.items;
tempItems[0].name="Chnage -Name";
this.items=tempItems;
    console.log(this.items);
  }
}

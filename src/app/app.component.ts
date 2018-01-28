import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [
    {
      name: 'item1'
    },
    {
      name: 'item2'
    },
    {
      name: 'item3'
    },
    {
      name: 'item4'
    },
    {
      name: 'item5'
    }
  ];

  onClick(itemEl) {
    itemEl.scrollIntoView();
  }
}

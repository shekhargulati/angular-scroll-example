import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  name: string;
  @ViewChild('item') itemEl: ElementRef;
  showStyle = false;

  constructor() { }

  ngOnInit() {
  }

  scrollIntoView() {
    this.itemEl.nativeElement.scrollIntoView();
    this.showStyle = true;
  }

  getStyle() {
    if (this.showStyle) {
      return 'green';
    } else {
      return '';
    }
  }
}

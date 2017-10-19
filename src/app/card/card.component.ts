import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  @Input() cardItem
  mark = false;


  onClick() {
    this.mark = !this.mark;
  }

}

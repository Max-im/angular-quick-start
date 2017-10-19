import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit{

  constructor(private userService: UserService){}

  amount;

  ngOnInit() {
    this.amount = this.userService.amount;
  }

  onChange() {
    this.userService.setAmount(+this.amount);
  }
}

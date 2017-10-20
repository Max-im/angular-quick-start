import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  id: string;
  name: string;
  geo: string;
  img: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe( (params: Params ) => {
      this.id = params['id'];
      this.name = params['name'];
      this.img = params['img'];
      this.geo = params['geo'];
    })
  }

}

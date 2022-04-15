import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  obj_link: any =['https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/1.glb',
  'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/2.glb',
  'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb'];
  constructor() { }

  ngOnInit(): void {
  }

}

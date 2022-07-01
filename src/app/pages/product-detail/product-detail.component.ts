import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  obj_link: any =['https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/1.glb',
  'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/2.glb',
  'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb'];
  id:any;
  prd:any;
  constructor(  private activatedRoute: ActivatedRoute,private prdApi:ProductService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
     this.getProducts(this.id);
     console.log(this.id)
    });
  }
  getProducts(id:string){
    this.prdApi.getProduct(id).subscribe((res: any)=>{
      this.prd = res;
      this.obj_link = res.objLink;
     
      console.log(res)
    })
  }

}

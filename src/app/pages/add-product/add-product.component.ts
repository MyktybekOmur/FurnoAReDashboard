import { ProductService } from './../../services/product/product.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  countQuiz: number = 0;
  tempForQuizCount:any = [];
  obj: any;
  form: any = {
    name: null,
    category: null,
    categoryId:null,
    color: null,
    price: 0,
    content: 0,
    objLink:'',
    img:''
  };
  img:any;
  imgSwov: any;
  Visible: boolean = true;
  cat:any;
  constructor( private changeDetector: ChangeDetectorRef,private catApi: CategoryService,
    private router: Router,
    private prdApi:ProductService) { }

  ngOnInit(): void {
    this.getCategory();
  }
 
  getCategory(){
    this.catApi.getCategries().subscribe(res=>{
      this.cat = res;
  })
  }

  save(){
    console.log(this.obj)
  }
  submit(){

    this.form.categoryId=  this.cat.find((item: { name: any; })=>item.name==this.form.category).id;
    console.log(this.form);
     this.prdApi.addProduct(this.form,this.imgSwov).then(()=>{
      this.router.navigate(['/admin/products']);
     });
   

  }
  async changeImage(event: any) {
    this.img = event.target.files;
    for (let i = 0; i < this.img.length; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgSwov = event.target.result;
        this.changeDetector.detectChanges();
        this.Visible = !this.Visible;
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  removeImg(type: string) {

    this.Visible = !this.Visible;
    this.img = [];

}
}

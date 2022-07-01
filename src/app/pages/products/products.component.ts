import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prds:any;
  cats:any;
  constructor(private prdApi:ProductService,private catApi: CategoryService,private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getPrdWithCat(cat:string){
    this.prdApi.getPrd(cat).subscribe(res=>{
      this.prds = res;
    })
  }
  getProducts(){
    this.prdApi.getProducts().subscribe(res=>{
      this.prds = res;
    })
  }
  getCategories(){
    this.catApi.getCategries().subscribe(res=>{
      this.cats = res;
    })
  }

  deleteUser(id: any){
this.prdApi.deleteProduct(id);
  }
  //alertConfirm
  alertConfirmation(id: any) {
    Swal.fire({
      title: 'Silmek ister misiniz?',
      text: 'Seçmiş olduğunuz veri silinecektir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal',
    }).then((result) => {
      if (result.value) {
        this.deleteUser(id); Swal.fire('Başarılı silindi!', 'success');

      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}

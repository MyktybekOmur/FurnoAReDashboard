import { CategoryService } from './../../services/category/category.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  update:boolean = false;
  cat:any = [];
  form = {
    name:'',
    img:'',
    count:0,
    conten: ''
  }
  img:any;
  imgSwov: any;
  Visible: boolean = true;
  updateImg = false;
  catID = '';
  constructor(private catApi: CategoryService,private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.catApi.getCategries().subscribe(res=>{
      this.categories = res;

    })
  }
  deleteUser(id: string){
    this.catApi.deleteCategory(id);
  }
  openEdit(cat: any,contr:boolean){
    this.catID = cat.id;
    this.form ={
      name:cat?.name,
      img:cat?.imageUrl,
      count:0,
      conten: cat?.conten
    }
    this.imgSwov = cat?.imageUrl;
    this.Visible = false;
    this.update = true
  }
  openAdd(){
    this.update = false;
    this.form ={
      name:'',
      img:'',
      count:0,
      conten: ''
    }
    this.Visible = true;
  }
  //alertConfirm
  alertConfirmation(id: string) {
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

  submit(){
    const body = {
      name:this.form.name,
      count:0,
      conten: this.form.conten,
      imageUrl:this.imgSwov
    }
    if(this.update){
      this.catApi.updateCategory(this.catID,body,this.imgSwov,this.updateImg);
    }else{
      this.catApi.addCategory(body,this.imgSwov);
    }
   
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
        this.updateImg = true;
        this.Visible = !this.Visible;
        this.img = [];

  }
}

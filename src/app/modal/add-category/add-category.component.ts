import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  form = {
    name:'',
    img:'',
    count:0,
    conten: ''
  }
  img:any;
  imgSwov: any;
  Visible: boolean = true;
  @Input() cat: any;
  constructor( 
  private changeDetector: ChangeDetectorRef,private catApi: CategoryService) { }

  ngOnInit(): void {
    console.log(this.cat);
  }
  submit(){
    const body = {
      name:this.form.name,
      count:0,
      conten: this.form.conten
    }
     this.catApi.addCategory(body,this.imgSwov);
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

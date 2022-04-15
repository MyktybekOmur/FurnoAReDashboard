import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  countQuiz: number = 0;
  tempForQuizCount:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  getNumber(number: number){
    console.log(number);
    this.countQuiz = number;
    this.tempForQuizCount = [];
    for (let i = 1; i <= number; i++) {
      this.tempForQuizCount.push({'index':i});
      
    }
  }
}

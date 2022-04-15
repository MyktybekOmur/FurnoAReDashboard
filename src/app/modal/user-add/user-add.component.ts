import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }
  

}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  deleteUser(id: string){

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
        this.deleteUser(id); //Swal.fire('Başarılı silindi!', 'success');

      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}

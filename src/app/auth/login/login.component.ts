import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor( private router: Router,
    private authApi: AuthService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
    this.authApi.login(this.form.username,this.form.password).subscribe(res=>{
      console.log(res)
      if(res.length>0){
        this.tokenStorage.saveUser(res);
        this.router.navigate(['/admin']);
      }
      else{
        this.isLoginFailed = true;
      }
 
    })
    
  }
  reloadPage() {
    window.location.reload();
  }

}

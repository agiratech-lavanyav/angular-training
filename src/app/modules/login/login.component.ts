
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule , Router } from '@angular/router';
import { MyServiceService } from '../../providers/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyServiceService]
})
export class LoginComponent implements OnInit {
  hide=true;
  constructor(private fb: FormBuilder, private routes : Router, private myService: MyServiceService){}

  ngOnInit(): void {
    if(localStorage.getItem("userName")!=null){
      this.routes.navigate(['/dashboard'])
    }
    else{
      this.routes.navigate([''])
    }
  }
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin() {
    if (!this.loginForm.valid) {
      alert ('Enter the correct username and password');
    }
    else{
      let data = {
        userName : this.loginForm.value.username,
        id: (Math.random()),
        isAuthenticated: true,
      };
      localStorage.setItem('userName', JSON.stringify(data));
      this.routes.navigate(['/dashboard']);
    }
  }

  }
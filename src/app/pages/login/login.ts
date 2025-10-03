import { Component } from '@angular/core';
import { Api } from '../../api';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,JsonPipe,CurrencyPipe,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 
  model={
     first_name: null,
    last_name: null,
    phone: null,
    email: null,
    password: null,
   confirm_password: null
  }
constructor(private api:Api,public toastr: ToastrService ,private router:Router){

}
passmatch():boolean{
  return this.model.password===this.model.confirm_password
}
handleSubmit(form : NgForm){
    
    if(form.valid){
      console.log(form)
      this.api.regiter(this.model).subscribe({
        next : (res)=>{
          console.log(res)
        if(res.status=="true"){
  localStorage.setItem('token', res.data.token);
         localStorage.setItem('userid',res.data.id)
             this.api.userid = res.data.id;
         this.router.navigateByUrl('/allposts');
           this.toastr.success('regiter success')
           this.api.username=res.data.first_name
           this.api.isLogin = true
        }
        },
        error:(err)=>{
          this.toastr.error(err.error.message)
        }
      }
      )

    }else{
      this.toastr.error('regiter failed')
    }

  }
}

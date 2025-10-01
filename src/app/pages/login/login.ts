import { Component } from '@angular/core';
import { Api } from '../../api';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, JsonPipe } from '@angular/common';

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
constructor(private api:Api,public toastr: ToastrService){

}
passmatch():boolean{
  return this.model.password===this.model.confirm_password
}
handleSubmit(form : NgForm){
    
    if(form.valid){
      console.log(form)
      this.api.login(this.model).subscribe({
        next : (res)=>{
          console.log(res)
          if(res.status){
            this.toastr.success('login success')
          }
        }
      }
      )

    }else{
      this.toastr.error('login failed')
    }

  }
}

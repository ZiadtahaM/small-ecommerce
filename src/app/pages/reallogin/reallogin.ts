import { Component } from '@angular/core';
import { Api } from '../../api';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reallogin',
  imports: [FormsModule,JsonPipe],
  templateUrl: './reallogin.html',
  styleUrl: './reallogin.css'
})
export class Reallogin {
  updatedData:any
 token=localStorage.getItem('token')
  userid=localStorage.getItem('userid')
constructor(private api:Api ,public toastr: ToastrService){
  
}

model={
  username:'',
  second:'',
  email:'',
  password:'',
  phone:'',
}
udatdata(updatedform: NgForm) {
  if (updatedform.valid) {
    this.updatedData = {
      first_name: updatedform.value.username,
      last_name: updatedform.value.last_name,
      phone: updatedform.value.phone,
      email: updatedform.value.email || 'default@example.com' // add email
    };
    
    this.api.updateprofile(this.userid, this.updatedData).subscribe({
      next: (res) => {
        console.log('Updated successfully', res);
        this.toastr.success('Profile updated!');
      },
      error: (err) => {
        console.error('Update failed', err);
        this.toastr.error('Update failed');
      }
    });
  }
}

  }

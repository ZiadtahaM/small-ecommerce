import { Component } from '@angular/core';
import { Api } from '../../api';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reallogin',
  imports: [FormsModule,JsonPipe,CommonModule ],
  templateUrl: './reallogin.html',
  styleUrl: './reallogin.css'
})
export class Reallogin {
  updatedData:any
  name_en: string | null = null;
 // component.ts
governorates: { id: number; name: string }[] = [];
cities: { id: number; name_en: string }[] = [];

selectedGovId: number | null = null;
selectedCityId: number | null = null;

 name:any
 token=localStorage.getItem('token')
  userid=localStorage.getItem('userid')
constructor(private api:Api ,public toastr: ToastrService){
  
}
trackByIndex(index: number, item: any): any {
  return index;
}

ngOnInit(): void {
  this.api.getgov().subscribe({
    next:(res)=>{
      console.log(res.data)
     this.governorates = res.data;
     console.log(this.governorates);

   
    }
  })
}

onGovernorateClick(id: number) {
  this.selectedGovId = id;
  this.model2.state_id = id; 
  this.api.getcity(id).subscribe({
    next:(res)=>{
      console.log(res.data)
     this.cities = res.data;
     console.log(this.cities);
    }
  })
}
onCityClick(id: number) {
  this.selectedCityId = id;
  console.log(this.selectedCityId);
  this.model2.city = id;      // Update model2 here
  this.model2.city_id = id; 
  
}
model={
  username:'',
  second:'',
  email:'',
  password:'',
  phone:'',
}
model2={
   street_address: "El Nasr Street.,",
    suburb: "test suburb",
    city: this.selectedCityId, // city id
    country_id: 65, // country id
    phone:"01234567890",
    building_number: "10",
    floor_number: "7",
    flat_number: "9",
    state_id: this.selectedGovId, // governorate id
    city_id: this.selectedCityId // city id
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

submit(addadress: NgForm){
  if (!addadress.valid) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Update model2 with latest selections before sending
  this.model2.state_id = this.selectedGovId;
  this.model2.city = this.selectedCityId;
  this.model2.city_id = this.selectedCityId;
  
  if (!this.model2.city) {
    alert('city is req');
    return;
  }
  
  this.api.addadress(this.model2).subscribe({
    next:(res)=>{
      this.toastr.success('Address added!');
    },
    error: (err) => {
      this.toastr.error('Add address failed');
    }
  })
}

}

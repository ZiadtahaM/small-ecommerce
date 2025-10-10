  import { Component } from '@angular/core';
  import { Api } from '../api';
import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-adrresslist',
    imports: [CommonModule],
    templateUrl: './adrresslist.html',
    styleUrl: './adrresslist.css'
  })
  export class Adrresslist {
    model2={
   street_address: "El Nasr Street.,",
    suburb: "test suburb",
    city: '', // city id
    country_id: 65, // country id
    phone:'',
    building_number: '',
    floor_number: '',
    flat_number: '',
    // governorate id
    city_id: '',
    cityInfo:{name_en:''},
    state_id:{name:''}
}
  address=[this.model2]
   
  constructor(private api:Api){}
  ngOnInit(): void {
    this.api.list().subscribe({
      next:(res)=>{
        console.log(res)
      this.address=res.data
      console.log(this.address);
      
      }
    })
  
  }}

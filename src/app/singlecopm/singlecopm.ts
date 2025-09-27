import { Component } from '@angular/core';
import { Api } from '../api';

import { ActivatedRoute } from '@angular/router';
import { SlicePipe,JsonPipe } from '@angular/common';

@Component({
  selector: 'app-singlecopm',
  imports: [SlicePipe,JsonPipe],
  templateUrl: './singlecopm.html',
  styleUrl: './singlecopm.css'
})
export class Singlecopm {
post:any
showmore: boolean = false;
  
  allposts:any[]=[]
  singlepost:any
constructor(private api:Api,private jjj:ActivatedRoute){

}
ngOnInit(){let id =this.jjj.snapshot.paramMap.get('postid')
 this.api.getsinglepost(id).subscribe({
  next: (res) => { this.singlepost = res; },
  error: (err) => {
    console.error("API call failed:", err);
    // You should also update the UI to show an error message to the user
  }
});

 this.api.getallpost().subscribe({
  next:(res)=>{
    this.allposts=res.products
     console.log(  this.allposts);
  }
  
 })

 
}
 


toggle(){
  this.showmore=!this.showmore
}

}

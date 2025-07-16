import { Component } from '@angular/core';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { FilterpipPipe } from "../filterpip-pipe";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-allproducts',
  imports: [FormsModule, RouterModule, FilterpipPipe],
  templateUrl: './allproducts.html',
  styleUrl: './allproducts.css'
})
export class Allproducts {
  posts:any=[]
  userinputtitle:string=''
  post:any
constructor(private api:Api,public toastr: ToastrService){}
ngOnInit(){
this.api.getallpost().subscribe({
  next: (res)=>{
    this.posts=res.products
  },error:(err)=>{
    console.log(err);
  },
  complete:()=>{
    console.log(this.posts);
  }
  
})

  
}
findbytitle(){
 this.posts.find((posts:any)=>{
  return posts.title.toLowerCase() == this.userinputtitle.toLowerCase()
 })
}
}

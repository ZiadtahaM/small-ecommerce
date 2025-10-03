import { Component } from '@angular/core';
import { Api } from '../api';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet,RouterLink ],   
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  username:null|string=null
  islogin:boolean=true
  constructor(public api:Api ,private router:Router){} 
  ngOnInit(){
    this.username = this.api.username
    this.islogin = this.api.isLogin
  }
  handleLogout(){
    localStorage.removeItem('token')
    this.api.isLogin = false
  }
  logout(){
    this.handleLogout()
    this.api.userid = null
    this.router.navigate(['']);
    this.api.username = null
    this.api.email = null
    this.api.password = null
    this.api.confirmPassword = null
    this.api.isLogin = false
   

}}

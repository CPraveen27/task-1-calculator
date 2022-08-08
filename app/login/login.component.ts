import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  A!:string;
  B!:string;
  Result!:Number;

  constructor() { }

  ngOnInit(): void {
  }
  Addition(){
    this.Result=parseInt(this.A)+parseInt(this.B);}
  Subtraction(){
    this.Result=parseInt(this.A)-parseInt(this.B);
  }
  Multliplication(){
    this.Result=parseInt(this.A)*parseInt(this.B);
  }
  Division(){
    this.Result=parseInt(this.A)/parseInt(this.B);
  }
  }
 



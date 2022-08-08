import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Addition()
  {
    this.router.navigateByUrl("/Addition");
  }
  Subtraction()
  {
    this.router.navigateByUrl("/Subtraction");
  }
  Multiplication()
  {
    this.router.navigateByUrl("/Multiplication");
  }
  Division()
  {
    this.router.navigateByUrl("/Division");
  }
}


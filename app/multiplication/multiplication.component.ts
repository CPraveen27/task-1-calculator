import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-multliplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  A!:string;
  B!:string;
  C!:string;
  Result!:number;
  add!:FormGroup;
  form: any;
  constructor(private fb:FormBuilder) {
    this.form=fb.group({
      field:fb.array([]),
    })
   }
  addNewField(){
    const add=this.form.get('field') as FormArray;
    add.push(
      this.fb.group({
        field:[],
  })
    );

  }
  deleteAddressGroup(index: number) {
    const add = this.form.get('field') as FormArray;
    add.removeAt(index);
  }
  

  ngOnInit(): void {
  }
  Multiplication(): void{
    // this.Result=parseInt(this.FirstNumber)+parseInt(this.SecondNumber);
    if(this.C == undefined)
    {
      this.Result=parseFloat(this.A)*parseFloat(this.B);
    }else{
      this.Result=parseFloat(this.A)*parseFloat(this.B)*parseFloat(this.C);
    }
    }
  }

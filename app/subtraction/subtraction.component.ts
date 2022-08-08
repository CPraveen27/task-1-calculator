import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
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
  Subtraction(): void{
    // this.Result=parseInt(this.A)+parseInt(this.B);
    if(this.C == undefined)
    {
      this.Result=parseFloat(this.A)-parseFloat(this.B);
    }else{
      this.Result=parseFloat(this.A)-parseFloat(this.B);
      this.Result=this.Result-parseFloat(this.C);
    }
    }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
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
  Addition(): void{
    // this.Result=parseInt(this.A)+parseInt(this.B);
    if(this.C == undefined)
    {
      this.Result=parseFloat(this.A)+parseFloat(this.B);
    }else{
      this.Result=parseFloat(this.A)+parseFloat(this.B)+parseFloat(this.C);
    }
    }

}

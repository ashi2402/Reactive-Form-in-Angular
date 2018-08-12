import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  form: FormGroup;
  userCtrl : FormControl;
  passCtrl : FormControl;

  constructor(private fb:FormBuilder) { }

    ngOnInit(){
      this.userCtrl = new FormControl('userName', [Validators.required, Validators.minLength(5)])
      this.passCtrl = new FormControl('password', [Validators.required, Validators.minLength(8), Validators.maxLength(15)])

      this.form = new FormGroup({
        userName: this.userCtrl,
        password: this.passCtrl
      })
    }
  onSubmit(){
    console.warn(this.form.value)
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }

  profileName = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),

    aliases: this.fb.array([
      this.fb.control('')
    ])
  })


  title = 'app';
  val = this.profileName.value;
  onSubmit() {
    console.warn(this.profileName.value)
  }

  get aliases() {
    return this.profileName.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}

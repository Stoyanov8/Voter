import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
 
     userForm = new FormGroup({
     email: new FormControl(),
     password : new FormControl(),
     confirm_password : new FormControl()
   });
  registerUser(){    
    if(this.userForm.valid){
      
    }
  }
  ngOnInit() {
     
  }

}

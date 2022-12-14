import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../Service/auth.service';

export function passwordMatchValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword &&password!== confirmPassword){
      return{
        passwordsDontMatch:true
      }
    }
    return null
  }
}

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword :  new FormControl('',Validators.required)
  },{validators:passwordMatchValidator()})
  constructor(private authService:AuthService,private router:Router,private toast:HotToastService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.signUpForm.get('email')
  }
  get name(){
    return this.signUpForm.get('name')
  }
  get password(){
    return this.signUpForm.get('password')
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword')
  }
  submit(){
    if(this.signUpForm.valid){
      const {name,email,password} = this.signUpForm.value
      this.authService.signUp(name as string,email as string,password as string).pipe(
        this.toast.observe({
          success:"user created",
          loading:"loading",
          error:({err})=> `${err}`
        })
      ).subscribe(()=>{
        this.router.navigate(['/users'])
      })
    }
  }

}

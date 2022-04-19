import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service'
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc3';
  contactForm:FormGroup;
  constructor(private fb:FormBuilder){
  this.contactForm=fb.group({
    yourName: ['', [Validators.required, Validators.minLength(3)]],
    yourEmail: ['', [Validators.required, Validators.email]],
    yourPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]]

  })
}
user={
  name:"somesh",
  email:"somesh@123",
  phone:"7570061516"
}
reactiveSubmit(){
  let name=this.contactForm.get('yourName')?.value;
  let email=this.contactForm.get('yourEmail')?.value;
  let phone=this.contactForm.get('yourPhone')?.value;
  console.log(name+ " "+ email+" "+phone)
  this.contactForm.reset();
  
}
setDate(){
  this.contactForm.setValue({
    "yourName":'somesh',
    "yourEmail":'somesh@123',
    "yourPhone": '7570061516'
  })
}
  messages:any[]=[];
  subscription!: Subscription;
  /*constructor(private messageservice:MyserviceService){
    this.subscription=this.messageservice.getMessage().subscribe(message=>{
      if(message){
        this.messages.push(message);
      }
      else{
        this.messages=[];
      }
    });
  }*/
Onsubmit(ele:any){
console.log(ele);
}
  
}

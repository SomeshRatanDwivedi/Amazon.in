import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private subject=new Subject<any>();
  sendMessage(message:string){
    this.subject.next({text:message});
  }
  clearMessage(){
    return this.subject.next("");
  }
  getMessage():Observable<any>{
    return this.subject.asObservable();
  }
}

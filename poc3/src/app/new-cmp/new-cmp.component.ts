import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  constructor(private messageService:MyserviceService) { }
  sendMessage():void{
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }
  clearMessages(): void {
    this.messageService.clearMessage();
}

  ngOnInit(): void {
  }

}

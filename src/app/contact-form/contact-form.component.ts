import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../user-information';
import { ContactInformationServiceService } from '../contact-information-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  constructor(private _contactInfoService:ContactInformationServiceService) { }
  name:string
  phone:Number
  email:string
  description:string

  UserInfo = new UserInformation('','','','')
  public response=[];
  ngOnInit(): void {
  }
  submitToService()  
  {
     this._contactInfoService.sendToAPI(this.UserInfo)
          .subscribe(
          //  data=>console.log('success!',data),
            data=>{
              console.log(data)
              for(let key in data){
              this.response.push(data[key])}
            },
            error=>console.log('error!',error)
          )
        
  }

}

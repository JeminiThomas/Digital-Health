import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent {

   id;
   name;
   hospitalDetails =[
   {id:121 , name: 'manipa', address:'basavangudi'},
   {id:321 , name: 'Apolo', address:'JP Nagar'},
   ]
  constructor(private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.name = params['name'];
    });
    console.log(this.id)
    console.log(this.name)
   this.getDetails();
  }
  getDetails() {
    this.hospitalDetails.filter((item)=>{
      if(item.id==this.id) {
        console.log(item)
      }
    })
  }
}

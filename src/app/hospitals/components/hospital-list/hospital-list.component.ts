import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  hospitals = [
    {id:121 , name :'Hospitals'},
    {id:321 , name :'Appolo'}
  ]
  constructor() { }

  ngOnInit() {

  }

}

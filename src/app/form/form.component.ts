import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  text:string;
  date:string;

identite:boolean=true;
contact:boolean=true;
adresse:boolean=true;
basicDatepicker:any;
info:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
addtask(){
  console.log(this.text+" "+this.date)
}
toggle(part:string){
  console.log(part)
  if(part=="identite"){
    this.identite=!this.identite;
  }
  if(part=="contact"){
    this.contact=!this.contact;
  }
  if(part=="adresse"){
    this.adresse=!this.adresse;
  }
  if(part=="info"){
    this.info=!this.info;
  }
}
}

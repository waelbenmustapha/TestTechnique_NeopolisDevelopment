import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  text:string;
  date:string;
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  customPlaceholder="hi"
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
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

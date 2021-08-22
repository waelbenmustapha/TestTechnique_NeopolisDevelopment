import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { PersonService } from '../services/person.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //default country to set for pays field
  defaultValue: Country = {
    name: 'France',
    alpha2Code: 'FR',
    alpha3Code: 'FRA',
    numericCode: '250',
    callingCode: '+33',
  };
  //formerror variable set to true if any form data is empty
  formerror: boolean = false;

  //form control pour le champ email
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  //start of all form controls and validation-->
  nomctrl = new FormControl('', [Validators.required]);
  prenomctrl = new FormControl('', [Validators.required]);
  civilitectrl = new FormControl('', [Validators.required]);
  naissancectrl = new FormControl('', [Validators.required]);
  situationfamilialectrl = new FormControl('', [Validators.required]);
  nbrenfantctrl = new FormControl('', [Validators.required]);
  phone1ctrl = new FormControl('', [Validators.required]);
  phone2ctrl = new FormControl('', [Validators.required]);
  mobilectrl = new FormControl('', [Validators.required]);
  adressectrl = new FormControl('', [Validators.required]);
  paysctrl = new FormControl('', [Validators.required]);
  villectrl = new FormControl('', [Validators.required]);
  ruectrl = new FormControl('', [Validators.required]);
  numruectrl = new FormControl('', [Validators.required]);
  codepostalctrl = new FormControl('', [Validators.required]);
  complementadressectrl = new FormControl('', [Validators.required]);
  motclesctrl = new FormControl('', [Validators.required]);
  commentairectrl = new FormControl('', [Validators.required]);
  //end of all form controls <--

  //start of form variables -->
  civilite: string;
  nom: string;
  prenom: string;
  naissance: Date;
  situationFamiliale: string;
  nmbrenfants: number;
  email: string;
  phone1: any;
  phone2: any;
  mobile: any;
  adresse: string;
  pays: any;
  ville: string;
  rue: string;
  numRue: string;
  codePostal: number = 92500;
  complementadresse: string;
  motCles: string;
  commentaire: string;
  //end of form variables <--

  //data for mobile number selector
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  customPlaceholder = 'hi';
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  //on click expand or collapse divs depending on this variables
  showIdentite: boolean = true;
  showContact: boolean = true;
  showAdresse: boolean = true;
  showInfo: boolean = true;

  
  constructor(private personserv: PersonService) {}

  
  ngOnInit(): void {}

  //function to add person
  add() {
    //check if all form data are not null and at least one phone number is provided
    if (
      this.nom != null &&
      this.prenom != null &&
      this.civilite != null &&
      this.naissance != null &&
      this.situationFamiliale != null &&
      this.nmbrenfants != null &&
      this.email != null &&
      (this.phone1 != null || this.phone2 != null || this.mobile != null) &&
      this.adresse != null &&
      this.pays != null &&
      this.ville != null &&
      this.rue != null &&
      this.numRue != null &&
      this.codepostalctrl != null &&
      this.complementadresse != null &&
      this.motCles != null &&
      this.commentaire != null
    ) {
      if (this.phone1 == null) {
        this.phone1 = { internationalNumber: '' };
      }
      if (this.phone2 == null) {
        this.phone2 = { internationalNumber: '' };
      }
      if (this.mobile == null) {
        this.mobile = { internationalNumber: '' };
      }
      // create new variable of type Person
      const newPerson = {
        nom: this.nom,
        prenom: this.prenom,
        civilite: this.civilite,
        naissance: this.naissance,
        situationFamiliale: this.situationFamiliale,
        nmbrenfants: this.nmbrenfants,
        email: this.email,
        phone1: this.phone1.internationalNumber,
        phone2: this.phone2.internationalNumber,
        mobile: this.mobile.internationalNumber,
        adresse: this.adresse,
        pays: this.pays.name,
        ville: this.ville,
        rue: this.rue,
        numRue: this.numRue,
        codePostal: this.codePostal,
        complementadresse: this.complementadresse,
        motCles: this.motCles,
        commentaire: this.commentaire,
      };
      
      //call the service to add newPerson to the database
      this.personserv
        .add(newPerson)
        .subscribe(() => console.log('add person done'));
    } else {
      // in case of an error in the form data forerror = true to throw an error 
      this.formerror = true;
    }
  }

  //toggle function to change variables to show or hide div sections of the form 
  toggle(part: string) {
    console.log(part);
    if (part == 'identite') {
      this.showIdentite = !this.showIdentite;
    }
    if (part == 'contact') {
      this.showContact = !this.showContact;
    }
    if (part == 'adresse') {
      this.showAdresse = !this.showAdresse;
    }
    if (part == 'info') {
      this.showInfo = !this.showInfo;
    }
  }
}

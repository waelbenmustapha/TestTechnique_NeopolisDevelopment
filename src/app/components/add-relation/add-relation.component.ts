import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-relation',
  templateUrl: './add-relation.component.html',
  styleUrls: ['./add-relation.component.css']
})
export class AddRelationComponent implements OnInit {
id:number;
peoples:any;
selectedperson:any;
relation:any;
  constructor(private route:ActivatedRoute,private personservice: PersonService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.personservice.getpersons().subscribe((persons) => {
      console.log(persons)
      this.peoples = persons;
    });
  }
  addrelation()
{
  this.personservice.addrelation(this.id,this.relation,this.selectedperson).subscribe();
  this.router.navigate(['/peoples'])


}
}

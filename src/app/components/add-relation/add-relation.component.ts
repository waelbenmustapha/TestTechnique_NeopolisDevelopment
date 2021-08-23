import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';
import { RelationService } from 'src/app/services/relation.service';

@Component({
  selector: 'app-add-relation',
  templateUrl: './add-relation.component.html',
  styleUrls: ['./add-relation.component.css'],
})
export class AddRelationComponent implements OnInit {
  id: number;
  peoples: any;
  selectedperson: any;
  relation: any;
  constructor(
    private route: ActivatedRoute,
    private personservice: PersonService,
    private router: Router,
    private relationservice:RelationService,
  ) {}

  ngOnInit(): void {
    //id of the clicked user
    this.id = this.route.snapshot.params.id;
    //get list of all users
    this.personservice.getpersons().subscribe((persons) => {
      console.log(persons);
      this.peoples = persons;
    });
  }
  addrelation() {
    //add relation api where the id is the user selected and the selected person is the one related to the user
    this.relationservice
      .addrelation(this.id, this.relation, this.selectedperson)
      .subscribe();
    this.router.navigate(['/peoples']);
  }
}

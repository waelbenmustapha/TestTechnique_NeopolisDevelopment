import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: [
    './relations.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class RelationsComponent implements OnInit {
  persons: any[] = [];

  //Columns to display on the table
  displayedColumns: string[] = ['id',  'relation','relative.nom'];
  clickedRows = new Set<any>();
displayname:string ;
  //data source that the table will use
  dataSource: MatTableDataSource<any>;
id:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personservice: PersonService,private route:ActivatedRoute,private router:Router) {
  }
  clickedme(prs:any){
    console.log(prs)
  }
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params.id);
this.displayname=this.route.snapshot.params.name;
console.log(this.displayname)
    // fetch and assign the data to the datasource that the table will render
    this.personservice.getspecificperson(this.id).subscribe((persons) => {
      this.persons = persons;
      this.dataSource = new MatTableDataSource(this.persons);
     //set the paginator and the sorting for the data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  //search filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addrelation()
{
  this.router.navigate(['/addRelation',this.id])
}
}

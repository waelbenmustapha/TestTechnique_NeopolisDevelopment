import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/Person';


@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css',
  "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
]
})
export class RelationsComponent implements OnInit  {

  persons : Person[]=[];

  displayedColumns: string[] = ['id', 'nom', 'relation'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personservice:PersonService) {
    // Create 100 users


    
  }

  ngOnInit(): void {
    
    // fetch and assign the data to the data source for the table to render
    this.personservice.getpersons().subscribe((persons)=>{this.persons=persons;this.dataSource = new MatTableDataSource(this.persons);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/Person';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: [
    './relations.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class RelationsComponent implements OnInit {
  persons: Person[] = [];

  //Columns to display on the table
  displayedColumns: string[] = ['id', 'nom', 'relation'];

  //data source that the table will use
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personservice: PersonService) {
  }

  ngOnInit(): void {
    // fetch and assign the data to the datasource that the table will render

    this.personservice.getpersons().subscribe((persons) => {
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
}

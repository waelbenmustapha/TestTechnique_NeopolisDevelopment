import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: [
    './peoples.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class PeoplesComponent implements OnInit {
  persons: any[] = [];

  //Columns to display on the table
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'pays'];

  //data source that the table will use
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personservice: PersonService, private router: Router) {}

  ngOnInit(): void {
    // fetch and assign the data to the datasource that the table will render
    this.personservice.getpersons().subscribe((persons) => {
      console.log(persons);
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

  checkrUserRelations(row: any) {
    this.router.navigate(['/relations', row.nom, row.id]);
  }
}



import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApplicationService } from '../../../core/services/application.service';
import { NgFor, NgIf } from '@angular/common';
import { ApplicationInterface } from '../../../core/Interface/AppInterface';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgFor, NgIf, MatTableModule, MatButtonModule, MatPaginatorModule, MatSortModule],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements AfterViewInit {
  list: ApplicationInterface[] = [];
  dataSource = new MatTableDataSource<ApplicationInterface>(this.list);
  displayedColumns: string[] = ['id', 'img', 'app_name', 'description', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private Appservice: ApplicationService) {}

  ngOnInit() {
    this.getApp();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getApp() {
    this.Appservice.getapp().subscribe(l => {
      this.list = l;
      this.dataSource.data = this.list;
    });
  }

  delete(l: ApplicationInterface) {
    this.list = this.list.filter(character => character != l);
    this.dataSource.data = this.list;
    this.Appservice.deleteapp(l.id).subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sortData(column: string) {
    const sortState: Sort = {active: column, direction: this.sort?.direction === 'asc' ? 'desc' : 'asc'};
    if (this.dataSource.sort) {
      this.dataSource.sort.active = sortState.active;
      this.dataSource.sort.direction = sortState.direction;
      this.dataSource.sort.sortChange.emit(sortState);
    }
  }
}

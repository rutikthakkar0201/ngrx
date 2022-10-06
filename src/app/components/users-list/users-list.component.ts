import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddUsersDialogComponent } from './add-users-dialog/add-users-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserData } from 'src/app/interface/userdata.interface';
import { userData } from './user-list-model/user-list-model';
import { Store } from '@ngrx/store';
import { sendUserData } from './user-list-state/user-list-actions';
import { getCounter } from './user-list-state/user-list-selector';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements AfterViewInit {
  lastName!: string;
  firstName!: string;
  profession!: string;


  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'profession'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input') textInput!: ElementRef;

  constructor(
    public dialog: MatDialog,
    private store: Store<{ useData: userData }>
  ) {
    let users;
    //get data from store (initial state)
    this.store.select(getCounter).subscribe((data: any) => {
      users = data.userData;
      console.log('data from strore', users);
    });

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = fromEvent(this.textInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value)
    );
    filterValue
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe((data: any) => {
        this.dataSource.filter = data;
      });

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // open dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(AddUsersDialogComponent, {
      width: '500px',
      data: { firstName: this.firstName, lastName: this.lastName, profession: this.profession },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      let count = 6;
      let id = count++;
      let userData = {
        id: count,
        firstName: result?.firstName,
        lastName: result?.lastName,
        profession: result?.profession
      };

      this.store.dispatch(sendUserData({ value: userData }));
      this.store.select(getCounter).subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data.userData);
        console.log('updated data from store', this.dataSource);
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    });
  }
}

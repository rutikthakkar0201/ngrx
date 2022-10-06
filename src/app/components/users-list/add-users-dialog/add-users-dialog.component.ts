import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DialogData } from 'src/app/interface/dialogData.interface';
import { userData } from '../user-list-model/user-list-model';

@Component({
  selector: 'app-add-users-dialog',
  templateUrl: './add-users-dialog.component.html',
  styleUrls: ['./add-users-dialog.component.scss'],
})
export class AddUsersDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store<{ useData: userData }>
  ) {
   
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

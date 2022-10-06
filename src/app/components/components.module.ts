import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { StoreModule } from '@ngrx/store';
import { AddUsersDialogComponent } from './users-list/add-users-dialog/add-users-dialog.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { sendUserDataReducer } from './users-list/user-list-state/user-list-reducer';
import { MatButtonModule } from '@angular/material/button';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserInfoTabComponent } from './tabs/user-info-tab/user-info-tab.component';
import { HistoryTabComponent } from './tabs/history-tab/history-tab.component';

const components = [UsersListComponent, AddUsersDialogComponent, TabsComponent];

@NgModule({
  imports: [
    StoreModule.forRoot({ userData: sendUserDataReducer }),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
  ],
  declarations: [...components, UserInfoTabComponent, HistoryTabComponent],
  exports: [...components],
})
export class ComponentsModule {}

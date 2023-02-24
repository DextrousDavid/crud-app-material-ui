import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'full-crud-app-material-ui';
  constructor(private dialog: MatDialog){};

  //Methods that opens up angular-material-ui
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%'
    });
  }
} 

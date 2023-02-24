import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
freshnessList: string[] = ['Brand New', 'Second Hand', 'Refurbished']
constructor(){}
}

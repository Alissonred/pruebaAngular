import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-my-list-favorites',
  templateUrl: './my-list-favorites.component.html',
  styleUrls: ['./my-list-favorites.component.scss']
})
export class MyListFavoritesComponent {
  public editState = false;
  constructor(private _dialog : MatDialog){}

}

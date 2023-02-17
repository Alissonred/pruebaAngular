import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  addEditForm : FormGroup

  constructor(private _fb: FormBuilder){
    this.addEditForm = this._fb.group({
      ///colocar cada uno de los campos vacios
    })

  }
}

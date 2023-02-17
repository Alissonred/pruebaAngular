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
      Date : "",
      TotalConfirmed : null,
      TotalDeaths : null,
      TotalRecovered : null,
    })

  }
  addEditElement(){
    console.log(this.addEditForm.value, 'es lo que se añade');

  }
}

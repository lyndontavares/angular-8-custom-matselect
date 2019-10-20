import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from './error-state-matcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-custom-control-with-validation';
  
  myForm: FormGroup;

  matcher = new CustomErrorStateMatcher();

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      favoriteFood: ['', Validators.required ]
    });
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}

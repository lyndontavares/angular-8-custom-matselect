import { ErrorStateMatcher } from "@angular/material";
import { FormControl, NgForm } from "@angular/forms";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl, form: NgForm): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
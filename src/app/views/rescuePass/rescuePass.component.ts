import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/usr.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rescuePass',
    templateUrl: './rescuePass.component.html',
    styleUrls: ['./rescuePass.component.css']
})
export class RescuePassComponent implements OnInit {

    @Output() solicitudEnviada: boolean = false;
    RescuePassForm: FormGroup;
    loading = false;
    submitted = false;


    rescuePassValidators = {
        email: ['', Validators.required],
    };


    constructor(private fb: FormBuilder, private userService: UserService, private redirect: Router) { }

    ngOnInit(): void {
        this.RescuePassForm = this.fb.group(this.rescuePassValidators);

        if (this.userService.isUserSignedIn()) { this.redirect.navigate(['/home']); }

    }


    //getter para facil acceso a los form fields
    get f() { return this.RescuePassForm.controls; }


    SolicitaRescuePass() {

        console.log(this.RescuePassForm);
        this.submitted = true;

        console.log('Formulario invalido?: ' + this.RescuePassForm.invalid)

        if (this.RescuePassForm.invalid) {
            return;
        }

        this.loading = true;


        this.userService.rescuePass(this.RescuePassForm).subscribe((resultado) => {

            return 'Exito';
        },
            error => {
                console.log('Error en la solicitud de recuperación de passw: ' + error);
                return 'Error';

            });
    }


}

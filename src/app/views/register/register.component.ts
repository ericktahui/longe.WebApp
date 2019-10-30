import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

//import { AlertService, UserService, AuthenticationService } from '../_services';


import { UserService } from 'src/app/services/usr.service';
import { AuthenticationCustomService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

import { MustMatch } from 'src/app/_helpers/must-match.validator';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    fechaSeleccionada:any;
    

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationCustomService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            apPaterno: ['', Validators.required],
            apMaterno: [''],
            correo: ['', [Validators.required,Validators.email]],
            passwSistema: ['', [Validators.required, Validators.minLength(6)]],
            repetirpassword: ['', [Validators.required, Validators.minLength(6)]],
            fechaNacimiento: [''],
            sexo: ['', Validators.required],
            idClubFrecuentaMas: ['', Validators.required],
            capoNombre :[''],
        },{
            validator: MustMatch('passwSistema','repetirpassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }



    
    OnSelectDate(event){
        console.log('Seleccionó fecha:');
        console.log(event);
        this.fechaSeleccionada= event;
    }
   


    onSubmit() {
        this.submitted = true;

        console.log('Registrando...');
        //console.log(this.registerForm.value);
        console.log(this.fechaSeleccionada);
 
        var cc= this.registerForm.get("fechaNacimiento");
           cc.setValue(this.fechaSeleccionada);
           
        console.log(this.registerForm.value);

        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                (data) => {
                    console.log('data:');
                    console.log(data);
                    this.alertService.success('Registro exitoso', true);
                    this.router.navigate(['/login']);
                },
                (error) => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }




    
}

import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/usr.service';
import User from 'src/interfaces/user';
import { Router } from '@angular/router';




 function validadorRepetirPassw(control: FormControl): { [s: string]: boolean } {
     
    if( !control.value.match(/^123/) ){

        return {validadorRepetirPassw:true}
    }
    else{ return null; }

    
 }



 export const validadorRepetirPassw_2 = (control: AbstractControl): { [s: string]: boolean } => {
    
    const pass = control.get('passwd'); 
    const confirmPass = control.get('passwRepetir');

    if (!pass || !confirmPass) return null;

    return pass.value === confirmPass.value ? null : { validadorRepetirPassw: true }  
}


@Component({
    selector: 'active-passw',
    templateUrl: './changePassword.component.html',
    styleUrls: ['./rescuePass.component.css']
})
export class ChangePasswordComponent implements OnInit {

    @Output() currentUser: User | null;
    loading = false;
    submitted = false;
    formGroupActivePass: FormGroup;

    validadores = {
        passwd: ['', Validators.required],
        passwRepetir: ['', Validators.compose([ Validators.required, validadorRepetirPassw])]
    };


  

    constructor(private fb: FormBuilder, private userService: UserService, private redirect: Router) { 

        //this.formGroupActivePass = this.fb.group(this.validadores);
    }

    //getter para facil acceso a los form fields
    get f() { return this.formGroupActivePass.controls; }


    ngOnInit(): void {

      //this.formGroupActivePass = this.fb.group(this.validadores);


       this.formGroupActivePass = this.fb.group({
        passwd: ['', [Validators.required]],
        passwRepetir: ['',[Validators.required]]},
        { validator: validadorRepetirPassw_2 });
      

/*
     this.formGroupActivePass  = this.fb.group({
        passwd: ['', Validators.required],
        passwRepetir: this.fb.group({
            passwd: ['', Validators.required],
            passwRepetir: ['', Validators.required]
        }, { validator: validadorRepetirPassw_2 })
      });
*/




         /*
        if(this.userService.isUserSignedIn())
           { this.redirect.navigate(['/home']); }
        else{
              //Obtenemos el token generado de la solicitud a cambio de Password

              //Obtenemos el token del QueryString

        }
        */


    };


/*

    validadorRepetirPassw_2(group: FormGroup): { [s: string]: boolean } {
  
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmPass.value;

        return pass === confirmPass ? null : { validadorRepetirPassw: true }  
   }
*/
   
    changePassword() {

        console.log(this.formGroupActivePass);
        this.submitted = true;

        console.log('Formulario invalido?: ' + this.formGroupActivePass.invalid)

        if (this.formGroupActivePass.invalid) {
            return;
        }

        this.loading = true;

        //this.userService.

    }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-homeold',
  templateUrl: './home.old.component.html'
})
export class HomeOLDComponent implements OnInit {

  myForm:FormGroup;

user ={
  nombre:['erick',Validators.required],
  apellido:['tahuilan'],
  edad:[32],
  descripcion:['Esta es una pequeña descripción'],
  telefono:[5745878855,[Validators.required,Validators.minLength(10)]]
};




  constructor(private fb:FormBuilder) { }

  ngOnInit(): void { 
    
    // this.myForm = this.fb.group({
    //     'nombre':'erick'

    // });
    this.myForm = this.fb.group(this.user);
  }

  onSubmit(){
    console.log(this.myForm);
 
    if(this.myForm.valid){
      alert('Éxito');
    }
    else{
      alert('Error');
    }
 
  }

}

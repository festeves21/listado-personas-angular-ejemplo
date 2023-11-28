import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listado-personas';
  titulo = 'Listado de Peronas'
  nombreInput:string ='';
  apellidoInput:string =''


  personas:Persona[] = [ new Persona('Franklin','Esteves') , new Persona('Jennifer', 'Sanchez') ]


  agregarPersona():void{
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona);
  }

}

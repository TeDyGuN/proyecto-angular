import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 101;
  title = 'sesion1';
  equipos: any = [ 'Bolivar', 'The Strongest', 'Oriente Petrolero', 'Wilstermann', 'Aurora'];
  contar() {
    this.contador = this.contador + 1;
    console.log(this.contador);
  }
}

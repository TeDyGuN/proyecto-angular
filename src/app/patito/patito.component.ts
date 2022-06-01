import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-patito',
  templateUrl: './patito.component.html',
  styleUrls: ['./patito.component.css']
})
export class PatitoComponent implements OnInit {
  contadorHijo = 0;
  constructor() { }

  ngOnInit(): void {
  } 
  contar() {
    this.contadorHijo = this.contadorHijo + 1;
  }

}

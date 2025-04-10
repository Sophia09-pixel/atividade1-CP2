import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  valor1 = 0;
  valor2 = 0;
  operacao = '';
  resultado: number | null = null;
  erroDivisao = false;

  calcular() {
    this.erroDivisao = false;

    switch (this.operacao) {
      case 'soma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'subtracao':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacao':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'divisao':
        if (this.valor2 === 0) {
          this.erroDivisao = true;
          this.resultado = null;
        } else {
          this.resultado = this.valor1 / this.valor2;
        }
        break;
      default:
        this.resultado = null;
    }
  }
}

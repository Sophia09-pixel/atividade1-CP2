import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meses.component.html',
  styleUrl: './meses.component.scss'
})
export class MesesComponent {
  month = 1
  months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

  changeMonth (event:Event):void {
    const target = event.target as HTMLInputElement;
    this.month = Number(target.value);
  }
}

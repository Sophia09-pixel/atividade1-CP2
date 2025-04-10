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
  months = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dez']

  changeMonth (event:Event):void {
    const target = event.target as HTMLSelectElement;
    this.month = Number(target.value);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  itens: string[] = ["Maças, Banana, Leite"];
}

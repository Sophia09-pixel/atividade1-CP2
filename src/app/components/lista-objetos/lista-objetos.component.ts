import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-objetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-objetos.component.html',
  styleUrl: './lista-objetos.component.css'
})
export class ListaObjetosComponent {
  usuarios = [{nome: "Ana", idade:25}, {nome: "Carlos", idade:30}];
}

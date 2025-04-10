import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promocao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promocao.component.html',
  styleUrl: './promocao.component.css'
})
export class PromocaoComponent {
  produtos = [{nome: 'Notebook', preco: 3000, promocao: true},{nome: 'Mouse', preco: 50, promocao: false}]
}

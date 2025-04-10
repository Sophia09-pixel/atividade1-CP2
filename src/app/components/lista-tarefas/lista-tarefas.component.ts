import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Revisar código'];

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}

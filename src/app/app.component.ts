import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MesesComponent } from './components/meses/meses.component';
import { ComprasComponent } from './components/compras/compras.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { StatusPedidoComponent } from './components/status-pedido/status-pedido.component';
import { ListaObjetosComponent } from './components/lista-objetos/lista-objetos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MesesComponent, ComprasComponent, AcessoComponent, ListaTarefasComponent, StatusPedidoComponent, ListaObjetosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividadesCp';
}

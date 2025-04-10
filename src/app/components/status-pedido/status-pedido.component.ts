import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-pedido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './status-pedido.component.html',
  styleUrl: './status-pedido.component.css'
})
export class StatusPedidoComponent {
  status: string = 'pendente';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MesesComponent } from './components/meses/meses.component';
import { ComprasComponent } from './components/compras/compras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MesesComponent, ComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividadesCp';
}

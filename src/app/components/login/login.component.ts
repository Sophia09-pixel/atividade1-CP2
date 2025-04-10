import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  status: 'vazio' | 'invalido' | 'sucesso' | '' = '';

  validarLogin() {
    if (!this.email || !this.senha) {
      this.status = 'vazio';
    } else if (!this.email.includes('@') || this.senha.length < 6) {
      this.status = 'invalido';
    } else if (this.email === 'user@teste.com' && this.senha === '123456') {
      this.status = 'sucesso';
    } else {
      this.status = 'invalido';
    }
  }
}

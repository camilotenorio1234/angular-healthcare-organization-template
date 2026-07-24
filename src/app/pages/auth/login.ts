import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({ selector: 'app-login', imports: [FormsModule, RouterLink], templateUrl: './login.html', styleUrl: './auth.scss' })
export class Login {
  private readonly auth = inject(AuthService); private readonly router = inject(Router);
  protected email = ''; protected password = ''; protected readonly error = signal('');
  protected submit(): void { const session = this.auth.login(this.email, this.password); if (!session) { this.error.set('Credenciales administrativas no válidas.'); return; } this.router.navigateByUrl('/admin'); }
}

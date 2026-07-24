import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({ selector: 'app-signup', imports: [FormsModule, RouterLink], templateUrl: './signup.html', styleUrl: './auth.scss' })
export class Signup {
  private readonly router = inject(Router); protected name=''; protected email=''; protected password=''; protected readonly error=signal('');
  protected submit(): void { if (!this.name || !this.email || this.password.length < 6) { this.error.set('Completa los campos; la contraseña debe tener mínimo 6 caracteres.'); return; } this.router.navigate(['/login']); }
}

import { Injectable, signal } from '@angular/core';

export interface Session { name: string; email: string; role: 'admin'; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly sessionKey = 'site-session';
  private readonly profileKey = 'site-admin-profile';
  private readonly demoEmail = 'admin@organizacion.org';
  readonly session = signal<Session | null>(this.readSession());

  login(email: string, password: string): Session | null {
    if (email.toLowerCase() !== this.demoEmail || !password) return null;
    const savedProfile = this.readProfile();
    const session: Session = { name: savedProfile.name, email, role: 'admin' };
    localStorage.setItem(this.sessionKey, JSON.stringify(session));
    this.session.set(session);
    return session;
  }

  logout(): void { localStorage.removeItem(this.sessionKey); this.session.set(null); }
  isAdmin(): boolean { return this.session()?.role === 'admin'; }

  updateProfile(name: string, email: string): void {
    const session: Session = { name, email, role: 'admin' };
    localStorage.setItem(this.profileKey, JSON.stringify({ name, email }));
    localStorage.setItem(this.sessionKey, JSON.stringify(session));
    this.session.set(session);
  }

  private readProfile(): { name: string; email: string } {
    try { return JSON.parse(localStorage.getItem(this.profileKey) ?? '') as { name: string; email: string }; }
    catch { return { name: 'Administración', email: this.demoEmail }; }
  }

  private readSession(): Session | null {
    try { return JSON.parse(localStorage.getItem(this.sessionKey) ?? 'null'); } catch { return null; }
  }
}

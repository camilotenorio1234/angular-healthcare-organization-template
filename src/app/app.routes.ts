import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Programs } from './pages/programs/programs';
import { Presence } from './pages/presence/presence';
import { Documents } from './pages/documents/documents';
import { Login } from './pages/auth/login';
import { Admin } from './pages/admin/admin';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home, title: 'Inicio | Organización' },
      { path: 'quienes-somos', component: About, title: 'Quiénes somos | Organización' },
      { path: 'que-hacemos', component: Programs, title: 'Qué hacemos | Organización' },
      { path: 'presencia', component: Presence, title: 'Contacto | Organización' },
      { path: 'documentos', component: Documents, title: 'Documentos | Organización' },
    ],
  },
  { path: 'login', component: Login, title: 'Iniciar sesión | Organización' },
  { path: 'admin', component: Admin, canActivate: [adminGuard], title: 'Panel administrativo | Organización' },
  { path: '**', redirectTo: '' },
];

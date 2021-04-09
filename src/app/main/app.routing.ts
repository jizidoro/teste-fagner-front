import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { AuthGuard } from '../guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('../presentation/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'carga',
    component: LayoutComponent,
    loadChildren: () =>
      import('../presentation/suporte/integracao/carga/carga.module').then((m) => m.ChargeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contrato-verba',
    component: LayoutComponent,
    loadChildren: () =>
      import('../presentation/pricing/contrato-verba/contrato-verba.module').then(
        (m) => m.ContratoVerbaModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('../presentation/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

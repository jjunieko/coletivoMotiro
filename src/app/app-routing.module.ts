import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "splash",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: 'contato-emergencia',
    loadChildren: () => import('./pages/contato-emergencia/contato-emergencia.module').then( m => m.ContatoEmergenciaPageModule)
  },
  {
    path: 'doacoes',
    loadChildren: () => import('./pages/doacoes/doacoes.module').then( m => m.DoacoesPageModule)
  },
  {
    path: 'preciso-ajuda',
    loadChildren: () => import('./pages/preciso-ajuda/preciso-ajuda.module').then( m => m.PrecisoAjudaPageModule)
  },
  {
    path: 'preload-chat',
    loadChildren: () => import('./pages/preload-chat/preload-chat.module').then( m => m.PreloadChatPageModule)
  },
  {
    path: 'respire',
    loadChildren: () => import('./pages/respire/respire.module').then( m => m.RespirePageModule)
  },
  {
    path: 'seja-voluntario',
    loadChildren: () => import('./pages/seja-voluntario/seja-voluntario.module').then( m => m.SejaVoluntarioPageModule)
  },
  {
    path: 'sobre-aplicativo',
    loadChildren: () => import('./pages/sobre-aplicativo/sobre-aplicativo.module').then( m => m.SobreAplicativoPageModule)
  },
  {
    path: 'modal-gratidao',
    loadChildren: () => import('./pages/modal-gratidao/modal-gratidao.module').then( m => m.ModalGratidaoPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

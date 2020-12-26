import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'production',
    loadChildren: () => import('./production/production.module').then( m => m.ProductionPageModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.module').then( m => m.PricingPageModule)
  },
  {
    path: 'deliviries',
    loadChildren: () => import('./deliviries/deliviries.module').then( m => m.DeliviriesPageModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then( m => m.RoutingPageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then( m => m.MaterialPageModule)
  },
  {
    path: 'assemblies',
    loadChildren: () => import('./assemblies/assemblies.module').then( m => m.AssembliesPageModule)
  },
  {
    path: 'releases',
    loadChildren: () => import('./releases/releases.module').then( m => m.ReleasesPageModule)
  },
  {
    path: 'custom',
    loadChildren: () => import('./custom/custom.module').then( m => m.CustomPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

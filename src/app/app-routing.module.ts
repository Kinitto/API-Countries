import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/Components/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/Components/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/Components/por-region/por-region.component';
import { VerPaisComponent } from './pais/Components/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: 'pais/:id', component: VerPaisComponent
  },
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

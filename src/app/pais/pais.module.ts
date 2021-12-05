import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './Components/por-capital/por-capital.component';
import { PorPaisComponent } from './Components/por-pais/por-pais.component';
import { PorRegionComponent } from './Components/por-region/por-region.component';
import { VerPaisComponent } from './Components/ver-pais/ver-pais.component';
import { PaisComponent } from './pais.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    PaisComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }

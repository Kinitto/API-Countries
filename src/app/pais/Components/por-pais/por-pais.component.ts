import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../Services/pais-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public busqueda: string;

  constructor(private PaisService: PaisService) {
    this.busqueda='';
   }

  ngOnInit(): void {
  }

  public agregarBusqueda() {

    this.obtenerApi();

  }

  public obtenerApi(): any {
    this.PaisService.obtenerPaises(this.busqueda).subscribe(
      res => {
        // Guarda el resultado
        this.PaisService.guardarResultado(res);
      }
    );
  }

}

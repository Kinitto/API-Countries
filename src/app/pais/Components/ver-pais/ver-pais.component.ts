import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../Interfaces/api';
import { PaisService } from '../../Services/pais-service.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  countries!: Observable<Country[]>;
  public listaPaises: any;
  public indice = 1;

  constructor(private PaisService: PaisService) {
    PaisService.obtenerResultado().subscribe((res: any) => { this.listaPaises = res });

   }
  ngOnInit(): void {

  }

}

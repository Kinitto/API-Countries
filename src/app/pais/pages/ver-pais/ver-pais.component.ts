import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais: any;
  constructor(private activateRoudte: ActivatedRoute,private paisService: PaisServiceService) { }

  ngOnInit(): void {


    this.paisService.verPais(this.activateRoudte.snapshot.params['id'])
    .subscribe(resp =>{
      this.pais = resp[0];
      console.log(this.pais)
    })
  }

}

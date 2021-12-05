import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../Interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url = "https://restcountries.com/v2/name/";

  private _listaPaises: Subject<any[]> = new Subject();

  constructor(private http: HttpClient) { }


  public guardarResultado(listaPaises: any[]): void {
    this._listaPaises.next(listaPaises);
  }
  public obtenerResultado(): Observable<any[]> {
    return this._listaPaises.asObservable();
  }

  obtenerPaises(busqueda: string){
    return this.http.get<Country[]>(this.url + busqueda);
  }


}

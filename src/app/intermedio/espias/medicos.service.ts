import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos(): Observable<any[]> {
    return this.http.get<any>('...').pipe(
      map( resp => resp['medicos'] )
    );
  }

  agregarMedico( medico: any ): Observable<any> {
    return this.http.post<any>('...', medico ).pipe(
      map( resp => resp['medico'] ),
      catchError(err => {
        throw 'No fue posible registrar el médido - ' + err
      })
    );
  }

  borrarMedico( id: string ): Observable<any> {
    return this.http.delete<any>('...' ).pipe(
      map( resp => resp['medico'] )
    );
  }


}

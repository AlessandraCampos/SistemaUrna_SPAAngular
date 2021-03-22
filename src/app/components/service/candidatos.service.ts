//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Candidato } from '../model/candidatos.model';
@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  baseUrl='http://localhost:3000/candidatos';

 constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }
 showMessage(msg:string):void{
   console.log(msg)
   this.snackBar.open(msg,'X',{
     duration:3000,
     horizontalPosition: 'right',
    verticalPosition:'top'
   })
 }

create(candidato: Candidato): Observable<Candidato>{
  return this.http.post<Candidato>(this.baseUrl, candidato);
}
read(): Observable<Candidato[]>{
return this.http.get<Candidato[]>(this.baseUrl);
}
//partidoCand(numero:number):Observable<Candidato>{
//const url=`$this.baseUrl}/${numero}`
//return this.http.get<Candidato>(url)
//}
}

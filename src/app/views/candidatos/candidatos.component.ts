import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/components/model/candidatos.model';
import { CandidatosService } from 'src/app/components/service/candidatos.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {
  candidatos: Candidato[]

  constructor(private candidatoservice: CandidatosService) { }

  ngOnInit(): void {
 this.candidatoservice.read().subscribe(candidatos=>{
 this.candidatos= candidatos
  
 })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CandidatosService } from 'src/app/components/service/candidatos.service';
import { Candidato } from 'src/app/components/model/candidatos.model';

@Component({
  selector: 'app-voto',
  templateUrl: './voto.component.html',
  styleUrls: ['./voto.component.css']
})
export class VotoComponent implements OnInit {

  constructor(
    private candidatoservice: CandidatosService,
    private route: ActivatedRoute,
  ) { }
  candidato:Candidato = null;
  candidatos: Candidato[]
  idCandidato: string;
 

  ngOnInit(): void {  
    this.idCandidato = this.route.snapshot.params.id;
       this.candidatoservice.read().subscribe(candidatos=>{
          this.candidatos= candidatos
      this.showcandidato(this.idCandidato);         
    })
  }

  showcandidato(value):void{    
      let indiceSelecionado = this.candidatos.findIndex(
        indice => Number(indice.id) === Number(value)
      );
      this.candidato = this.candidatos[indiceSelecionado];
  }

}

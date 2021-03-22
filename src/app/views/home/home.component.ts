import { Component, OnInit } from '@angular/core';
import { CandidatosService } from 'src/app/components/service/candidatos.service';
import { Candidato } from 'src/app/components/model/candidatos.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  votobranco = false;
  votonulo=false;
  candidatos: Candidato[]
  candidato:Candidato = null;
  // candidato:Candidato = {
  //   nome:'',
  //   partido:null,
  //   numero:null,
  //   imagem:null
  // }
  numeroAtual:string= ''

  //filtro:string
  btnconfimar:boolean= false;
  numeroCandidato= Number(this.numeroAtual)
  constructor(
    private candidatoservice: CandidatosService,
    private router: Router)
    { };
    public votos = [
    {"id": 1, "nome":"votobranco"},
    {"id": 2, "nome":"votonulo"}
    ];


  ngOnInit(): void {
    this.candidatoservice.read().subscribe(candidatos=>{
      this.candidatos= candidatos
    })
  }


  digitar(value):void{        
    this.showcandidato(this.numeroAtual);
  }

  clicar(value):void{    
    this.numeroAtual += String(value)    
    this.showcandidato(this.numeroAtual);
  }
  
  corrigir():void{
    this.numeroAtual="";
    this.candidato = null;
    this.votobranco = false;
    this.votonulo= false
  }
  confirmar():void{
    this.candidatoservice.showMessage("Operação executada com sucesso")
    this.router.navigate(['/voto',this.candidato.id]);
    if (this.votobranco == true){
      this.salvar(this.votos)
    }else if(this.votonulo==true){
      this.salvar(this.votos)
    }
  }

  salvar(voto):void{
    console.log(this.votos)
    if (this.votobranco == true){
      this.router.navigate(['/votonulo',this.votos[0].id]);
      console.log("passou pelo salvar em branco")
    }else if (this.numeroAtual.length > 7 || this.candidato == undefined || this.votonulo == true){
      console.log("passou pelo salvar em nulo"+"candidatos"+ this.candidatos.length+"voto nulo"+this.votonulo+"numero atual"+ this.numeroAtual)
      this.router.navigate(['/votonulo', this.votos[1].id]);
      
        }else{
        this.candidatoservice.showMessage("Operação executada com sucesso")
        this.router.navigate(['/voto',this.candidato.id]);
    }   
  }
 

  showcandidato(value):void{
        let indiceSelecionado = this.candidatos.findIndex(
        objectModified => Number(objectModified.numero) === Number(value)
        );
      this.candidato = this.candidatos[indiceSelecionado];    
      this.votobranco=false; 
      this.votonulo= false;    
      if (this.candidatos.length===0  || value == ''){
        console.log("passou pelo if")
        this.votonulo= true;
          }
  }
  branco():void{
    if(this.candidato !=null || this.numeroAtual !=""){
      this.votobranco=false
       return this.candidatoservice.showMessage("É necessário clicar em corrigir ") 
    }else{
     this.votobranco = true;
   }
  }

  nulo():void{
    if(this.candidato ==null){
      console.log("passou pela funcao nulo")
      this.votonulo = true;
          }else{
      return this.candidatoservice.showMessage("É necessário clicar em corrigir ") 
      
      
      }
  }

}

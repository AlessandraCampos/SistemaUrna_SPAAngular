import { Component, OnInit } from '@angular/core';
import { CandidatosService } from 'src/app/components/service/candidatos.service';
import { Router} from '@angular/router';
import { Candidato } from 'src/app/components/model/candidatos.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-candidatos-cad',
  templateUrl: './candidatos-cad.component.html',
  styleUrls: ['./candidatos-cad.component.css']
})
export class CandidatosCadComponent implements OnInit {

  candidato:Candidato = {
    nome:'',
    partido:null,
    numero:null,
    imagem:null
  }
  control: FormGroup;
  constructor(private candidatoservice: CandidatosService, 
    private fb: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.control = this.fb.group({
      nome:['',[Validators.required,Validators.minLength(15),Validators.maxLength(25)]],
      partido:['',Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(15)])],
      numero:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(5)])],
      imagem:['']
    })
  }
  

  createCandidato():void{
    if (this.control.invalid){
      return;
    }
    this.candidatoservice.create(this.candidato).subscribe(()=>{
      this.candidatoservice.showMessage("Operação executada com sucesso")
      this.router.navigate(['/candidatos'])
      console.log(this.candidato)
    })
   
  }
  cancel():void{
   this.router.navigate(['/candidatos'])
  }


}

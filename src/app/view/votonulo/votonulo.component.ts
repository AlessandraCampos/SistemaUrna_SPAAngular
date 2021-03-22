import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-votonulo',
  templateUrl: './votonulo.component.html',
  styleUrls: ['./votonulo.component.css']
})
export class VotonuloComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }
   votonulo: Boolean =false;
   votobranco:boolean=false;
   public votoId;
  ngOnInit(): void {
    this.mostrarvoto(this.votoId)
    
    //this.mostrarcandidato(this.votobranco);
    

  }
  mostrarvoto(votoId):void {
    this.votoId=parseInt(this.route.snapshot.paramMap.get('id'))
       if(this.votoId == 1){
      this.votobranco= true;
      console.log("você votou em branco?"+ this.votobranco)
      this.votonulo=false;
      console.log("você votou em branco?"+ this.votobranco+"voto nulo"+this.votonulo)
    }else {
      this.votonulo= true;
      this.votobranco= false;
      console.log("você votou em branco?"+ this.votobranco+"voto nulo"+this.votonulo)
    }
  }
  
}

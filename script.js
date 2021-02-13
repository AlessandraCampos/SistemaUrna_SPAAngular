let seuvotop= document.querySelector('.left1');
let cargo= document.querySelector('.left2 span');
let descricao= document.querySelector('.left4');
let aviso=document.querySelector('.d2');
let lateral =document.querySelector('.right-side');
let numeros= document.querySelector('.left3');



let etapaAtual= 0;
let numero='';


function comecarEtapa(){
    let etapa= etapas[etapaAtual];
    numero='';
    let numeroHTML='';
    descricao.innerHTML='';

    for(let i=0; i< etapa.numeros;i++){
        if(i===0){
            numeroHTML+= '<div class="numero pisca"></div>';
        }else{
           numeroHTML+= '<div class="numero"></div>';
    }
}

    seuvotop.style.display='none';
    cargo.innerHTML= etapa.titulo;
    descricao.innerHTML="";
    aviso.style.display='none';
    lateral.innerHTML='';
    numeros.innerHTML=numeroHTML;
}
function atualizaInterface(){
    console.log(numero)
    let etapa= etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero===numero){
            console.log('Passou no true');
            return true;
        } else {
            console.log('Passou no false');
            return false;
        }
        
        });
        if(candidato.length>0){
            candidato=candidato[0];
            seuvotop.style.display='block';
            aviso.style.display='block';
            descricao.innerHTML=`Nome: ${candidato.nome}</br>Partido: ${candidato.partido}`;
            let fotosHtml ='';
            let vice='';
            for(let i in candidato.fotos){
                fotosHtml+=`<div class="img1">
                <img src="img/${candidato.fotos[i].url}">${candidato.fotos[i].legenda}
                
            </div>`
            }
            lateral.innerHTML= fotosHtml;

        }else{
            aviso.style.display='block';
            seuvotop.style.display='block';
            descricao.innerHTML= `<div class="aviso-grande pisca">Voto Nulo</div>`;
                
        }
}

function clicou(n){
let elnumero= document.querySelector('.numero.pisca');
    if(elnumero !== null){
    elnumero.innerHTML=n;
    numero = `${numero}${n}`;
    elnumero.classList.remove('pisca');
    if(elnumero.nextElementSibling !== null){
    elnumero.nextElementSibling.classList.add('pisca');
   }else{
    atualizaInterface()
    }
    }
}
function corrige(){
    comecarEtapa()
}

function branco(){
    seuvotop.style.display='block';
    lateral.innerHTML=''
    descricao.innerHTML= `<div class="aviso-grande pisca">Voto em Branco</div>`;
    numero='';
}
comecarEtapa();


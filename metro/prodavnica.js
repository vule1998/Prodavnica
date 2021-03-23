import { Raf } from "./raf.js";

export class Prodavnica{

    constructor(naziv, n,m,kapacitetRaf){
        this.naziv=naziv;
        this.n=n;
        this.m=m;
        this.kapacitet=kapacitetRaf;
        this.kontejner =null;
        this.rafovi=[];
    }

    dodajRaf(raff){
        this.rafovi.push(raff);
    }

    crtajProdavnicu(host){

        if(!host)
            throw new Exception("Cale ne postoji");
        
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);

        this.crtajFormu(this.kontejner);
        this.crtajRafove(this.kontejner);

    }
    crtajFormu(host){

        const kontForma = document.createElement("div");
        kontForma.className="kontForma";
        host.appendChild(kontForma);

        var elLabela = document.createElement("h1");
        elLabela.innerHTML="Unos proizvoda";
        elLabela.className="h1";
        kontForma.appendChild(elLabela);

        elLabela = document.createElement("label");
        elLabela.innerHTML="Ime proizvoda";
        kontForma.appendChild(elLabela);

        let tb= document.createElement("input");
        tb.className="imeProizvoda";
        kontForma.appendChild(tb);


        elLabela = document.createElement("label");
        elLabela.innerHTML="Kolicina";
        kontForma.appendChild(elLabela);

        tb= document.createElement("input");
        tb.className="kolicina";
        tb.type="number";
        kontForma.appendChild(tb);


        let tipoviProizvoda =["pekara", "mlecni proizvodi", "meso", "voce", "povrce","flasirano","gricke"];
        let tipoviBoja =["yellow", "white", "red", "green", "purple","blue","black"];

        let opcija=null;
        let labela=null;
        let divRb=null;
        tipoviProizvoda.forEach((p, index)=>{
            divRb = document.createElement("div");
            opcija = document.createElement("input");
            opcija.type="radio";
            opcija.name = this.naziv;
            opcija.value= tipoviBoja[index];

            labela = document.createElement("label");
            labela.innerHTML=p;


            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            kontForma.appendChild(divRb);
        })


        divRb = document.createElement("div");
        let selX= document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML="X:"
        divRb.appendChild(labela);
        divRb.appendChild(selX);

        for(let i=0; i<this.m;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            selX.appendChild(opcija);
        }

        kontForma.appendChild(divRb);


        let selY= document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML="Y:"
        divRb.appendChild(labela);
        divRb.appendChild(selY);

        for(let i=0; i<this.n;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            selY.appendChild(opcija);
        }

        kontForma.appendChild(divRb);

        const dugme = document.createElement("button");
        dugme.innerHTML="Dodaj";
        dugme.className="dugme";
        kontForma.appendChild(dugme);
        dugme.onclick=(ev)=>{
            
            const  imeProizvoda= this.kontejner.querySelector(".imeProizvoda").value;
            const kolicina = parseInt(this.kontejner.querySelector(".kolicina").value);

            const tipProizvoda = this.kontejner.querySelector(`input[name='${this.naziv}']:checked`);

            if(tipProizvoda==null)
                alert("Molimo Vas izaberite tip proizvoda");
            
            let x = parseInt(selX.value);
            let y = parseInt(selY.value);


            let moguciRaf=this.rafovi.find(raff=>raff.imeProizvoda==imeProizvoda
                && raff.kapacitet+kolicina<=this.kapacitet
                && (raff.x!=x || raff.y!=y) );
            if(moguciRaf)
            alert("Popunjavaj isti raf! Raf je ("+moguciRaf.x+","+moguciRaf.y+")");
            else
             this.rafovi[x*this.n+y].azurirajRaf(imeProizvoda, kolicina,tipProizvoda.value,x,y);
        }


    }

    crtajRafove(host){

        const kontRafovi = document.createElement("div");
        kontRafovi.className="kontRafovi";
        host.appendChild(kontRafovi);
        let red;
        let raf;
        let raff;
        for(let i=0; i<this.m;i++){
            red=document.createElement("div");
            red.className="red";
            kontRafovi.appendChild(red);
            for(let j=0; j<this.n;j++){
               
                raff = new Raf(i,j,"","",this.kapacitet);
                this.dodajRaf(raff);
                raff.crtajRaf(red);
                

            }
        }
    }
}
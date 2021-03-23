export class Raf{
    constructor(i,j,tipProizvoda,nazivProizvoda, Maxkapacitet) {
        this.x=i;
        this.y=j;
        this.kapacitet=0;
        this.maxKapacitet=Maxkapacitet;
        this.tipProizvoda=tipProizvoda;
        this.nazivProizvoda=nazivProizvoda;
        this.miniKontejner =null;
        
    }
    vratiBoju(){
        if(!this.tipProizvoda)
        return "pink";
        else
        return this.tipProizvoda;
    }
    crtajRaf(host){
        this.miniKontejner = document.createElement("div");
        this.miniKontejner.className="raff";
        if(this.kapacitet==0)
            this.miniKontejner.innerHTML="Prazno";
        else
            this.miniKontejner.innerHTML="Prazno, " +this.kapacitet ;
        this.miniKontejner.style.backgroundColor=this.vratiBoju();
        host.appendChild( this.miniKontejner);

    }
    azurirajRaf(imeProizvoda, kolicina,tipProizvoda,x,y){


        if(kolicina+this.kapacitet>this.maxKapacitet)
            alert("raf je popunjen");
        if(imeProizvoda==="")
            alert("Molim unesi ime proizvoda");
        if(kolicina===" " || kolicina<1)
            alert("Molim unesi ispravan broj");
        if(kolicina+this.kapacitet<=this.maxKapacitet&&imeProizvoda!=" ")
        {
            this.imeProizvoda=imeProizvoda;
            this.tipProizvoda=tipProizvoda;
            this.kapacitet+=kolicina;
            this.miniKontejner.innerHTML = this.imeProizvoda+", "+this.kapacitet;
            this.miniKontejner.style.backgroundColor=this.vratiBoju();
        }
    }
}
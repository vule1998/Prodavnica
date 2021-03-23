import {Prodavnica} from "./prodavnica.js"


fetch("https://localhost:5001/Prodavnica/PreuzmiProdavnice").then(p=>
{
    p.json().then(data=>
        {
            data.forEach(prodavnica =>{

                
                const prodavnica1=new Prodavnica(prodavnica.naziv,prodavnica.n,prodavnica.m,prodavnica.kapacitet); 
                prodavnica1.crtajProdavnicu(document.body);

                prodavnica.rafovi.forEach(raff=>
                    {
                        var pr=prodavnica1.rafovi[raff.x*prodavnica1.n+raff.y];
                       
                        if(raff.maxKapacitet>=raff.kapacitet+pr.kapacitet)
                        {
                            pr.azurirajRafove(raff.imeProizvoda,raff.kapacitet,raff.tipProizvoda,raff.x,raff.y);
                        }

                        });
                  });
        });
 });

























/*const prodavnica1 = new Prodavnica("Maxi", 10,10,10);
prodavnica1.crtajProdavnicu(document.body);*/



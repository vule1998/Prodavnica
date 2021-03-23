using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using vdmp.Models;

namespace vdmp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdavnicaController : ControllerBase
    {
        public ProdavnicaContext Context{get;set;}
         public ProdavnicaController(ProdavnicaContext context)
        {
            Context=context;
        }
        [Route("PreuzmiProdavnice")]
        [HttpGet]
        public async Task<List<Prodavnica>> PreuzmiProdavnice()
            {
                return await Context.Prodavnice.Include(p=>p.Rafovi).ToListAsync();
            }

        [Route("UpisiProdavnicu")]
        [HttpPost]
        public async Task UpisiProdavnicu([FromBody] Prodavnica prodavnica)
        {
            Context.Prodavnice.Add(prodavnica);
            await Context.SaveChangesAsync();
        }
        [Route("IzmeniProdavnicu")]
        [HttpPut]
        public async Task IzmeniPiceriju([FromBody] Prodavnica prodavnica)
        {
            Context.Update<Prodavnica>(prodavnica);
             await Context.SaveChangesAsync();
        }
        [Route("IzbrisiProdavnicu/{id}")]
        [HttpDelete]
        public async Task IzbrisiProdavnicu(int id)
        {
            var prodavnica=await Context.Prodavnice.FindAsync(id);
            Context.Remove(prodavnica);
            await Context.SaveChangesAsync();
        }
        [Route("UpisRafa/{idProdavnice}")]
        [HttpPost]
        public async Task UpisiRaf(int idProdavnice,[FromBody] Raf raff)
        {
            var prodavnica=await Context.Prodavnice.FindAsync(idProdavnice);
            raff.Prodavnica=prodavnica; 
            Context.Rafovi.Add(raff);
            await Context.SaveChangesAsync();
        }
        [Route("IzbrisiRaf/{id}")]
        [HttpDelete]
        public async Task IzbrisiRaf(int id)
        {
            var rafff=await Context.Rafovi.FindAsync(id);
            Context.Remove(rafff);
            await Context.SaveChangesAsync();
        }
        [Route("IzmeniRaf")]
        [HttpPut]
        public async Task IzmeniRaf([FromBody] Raf raff)
        {
            Context.Update<Raf>(raff);
            await Context.SaveChangesAsync();
        }
        [Route("PreuzmiRafove")]
        [HttpGet]
        public async Task<List<Raf>> PreuzmiRafove()
            {
                return await Context.Rafovi.Include(p=>p.Prodavnica).ToListAsync();
            }

    }//,izmeniraf, citajsve
}

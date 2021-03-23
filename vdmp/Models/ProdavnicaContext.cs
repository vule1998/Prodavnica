using Microsoft.EntityFrameworkCore;

namespace vdmp.Models
{
    public class ProdavnicaContext:DbContext 
    {
        public DbSet<Prodavnica> Prodavnice {get; set;}

        public DbSet<Raf> Rafovi {get; set;}

        public ProdavnicaContext(DbContextOptions options): base(options)
        {

        }






    }
}
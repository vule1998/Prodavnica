using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace vdmp.Models
{
    [Table("Prodavnica")]
    public class Prodavnica 
    {
        [Key]
        [Column("ID")]
        public int ID{get;set;}

        [Column("Naziv")]
        [MaxLength(255)]
       public string Naziv{get;set;}
       [Column("Kapacitet")]
       public int Kapacitet{get;set;}
        [Column("N")]
       public int N{get;set;}
        [Column("M")]
       public int M{get;set;} 

        public virtual List<Raf> Rafovi {get;set;}
    }
}
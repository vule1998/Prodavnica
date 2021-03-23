using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace vdmp.Models
{
    [Table("Raf")]
    public class Raf
    {
        [Key]
        [Column("ID")]
        public int ID{get;set;}

        [Column("Ime proizvoda")]
        [MaxLength(255)]
       public string imeProizvoda{get;set;}
        [Column("Kapacitet")]
       public int Kapacitet{get;set;}
        [Column("MaxKapacitet")]
       public int MaxKapacitet{get;set;}
        [Column("Tip proizvoda")]
        [MaxLength(255)]
       public string tipProzvoda{get;set;} 

         [Column("X")]
        public int X{get;set;}

         [Column("Y")]
        public int Y{get;set;}

        [JsonIgnore]
        public Prodavnica Prodavnica {get; set;}
    }
}
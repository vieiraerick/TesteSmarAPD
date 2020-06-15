using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
  public class Room
  {
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    [MaxLength(60, ErrorMessage = "Este campo não deve ser superior a 60 caracteres")]
    public string Name { get; set; }
  }
}

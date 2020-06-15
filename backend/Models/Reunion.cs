using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
  public class Reunion
  {
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "O título é obrigatório")]
    [MaxLength(120, ErrorMessage = "Este campo não deve ser superior a 120 caracteres")]
    public string Title { get; set; }

    [Required(ErrorMessage = "A sala é obrigatória")]
    [MaxLength(100, ErrorMessage = "Este campo não deve ser superior a 100 caracteres")]
    public string Room { get; set; }

    [Required(ErrorMessage = "A data de início é obrigatória")]
    public string startTime { get; set; }
    
    [Required(ErrorMessage = "A data de início é obrigatória")]
    public string endTime { get; set; }

  }
}

using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
  [ApiController]
  [Route("/reunions")]
  public class ReunionController : ControllerBase
  {
    public DataContext Database { get; set; }

    public ReunionController(DataContext database)
    {
      this.Database = database;
    }

    [HttpGet]
    [Route("")]

    public async Task<ActionResult<List<Reunion>>> Get([FromServices] DataContext context)
    {
      var reunions = await this.Database.Reunions.ToListAsync();
      return reunions;
    }

    [HttpPost]
    [Route("")]
    public async Task<ActionResult<Reunion>> Post(
      [FromServices] DataContext context,
      [FromBody] Reunion model)
    {
      var reunions = await this.Database.Reunions.ToListAsync();

      //neste ponto do código eu tive certa dificuldade para trabalhar com as datas
      //é necessário a refatoração do código e implementação da validação para que 
      //uma reunião não tenha o término anterior ao início da mesma.

      var conflictAtRoom = reunions.Where(reunion => reunion.Room == model.Room).ToList();

      if (conflictAtRoom.Any())
      {
        var conflictAtStart = conflictAtRoom.Where(reunion => 
          DateTime.Parse(reunion.startTime) <= DateTime.Parse(model.startTime)
          && DateTime.Parse(model.startTime) <= DateTime.Parse(reunion.endTime)
        ).ToList();

        if (! conflictAtStart.Any())
        {
          var conflictAtEnd = conflictAtStart.Where(reunion =>
          DateTime.Parse(reunion.startTime) <= DateTime.Parse(model.endTime)
          && DateTime.Parse(model.endTime) <= DateTime.Parse(reunion.endTime)
          ).ToList();

          if (conflictAtEnd.Any())
          {
            return BadRequest(new { message = "Horário indisponível, reservado para outra reunião" });
          }
          else
          {
            if (ModelState.IsValid)
            {
              context.Reunions.Add(model);
              await context.SaveChangesAsync();
              return model;
            }
            else
            {
              return BadRequest(ModelState);
            };
          }
        }else
        {
          return BadRequest(new { message = "Horário indisponível, reservado para outra reunião" });
        }
      }
      else
      {
        if (ModelState.IsValid)
          {
            context.Reunions.Add(model);
            await context.SaveChangesAsync();
            return model;
          } else
          {
            return BadRequest(ModelState);
          } ;
      }
    }
  }
}
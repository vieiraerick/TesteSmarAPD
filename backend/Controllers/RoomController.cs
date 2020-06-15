using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using backend.Services;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
  [Route("/rooms")]
  public class RoomController: ControllerBase
  {
    public DataContext Database { get; set; }

    public RoomController(DataContext database)
    {
      this.Database = database;
    }

    [HttpGet]
    [Route("")]
    public async Task<ActionResult<List<Room>>> Get([FromServices] DataContext context)
    {
      var rooms = await this.Database.Rooms.ToListAsync();
      return rooms;
    }

    [HttpPost]
    [Route("")]
    [AllowAnonymous]
    public async Task<ActionResult<Room>> Post(
      [FromServices] DataContext context,
      [FromBody] Room model)
    {
      if (ModelState.IsValid)
      {
        context.Rooms.Add(model);
        await context.SaveChangesAsync();
        return model;
      }
      else
      {
        return BadRequest(ModelState);
      }
    }
  }
}


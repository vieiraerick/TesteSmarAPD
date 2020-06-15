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
  [Route("/users")]
  public class UserController: ControllerBase
  {
    public DataContext Database { get; set; }

    public UserController(DataContext database)
    {
      this.Database = database;
    }

    [HttpGet]
    [Route("")]
    [AllowAnonymous]
    public async Task<ActionResult<List<User>>> Get([FromServices] DataContext context)
    {
      var users = await this.Database.Users.ToListAsync();
      return users;
    }

    [HttpPost]
    [Route("")]
    [AllowAnonymous]
    public async Task<ActionResult<User>> Post(
      [FromServices] DataContext context,
      [FromBody] User model)
    {
      if (ModelState.IsValid)
      {
        context.Users.Add(model);
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


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
  [Route("/auth")]
  public class AuthorizationController: ControllerBase
  {
    public DataContext Database { get; set; }

    public AuthorizationController(DataContext database)
    {
      this.Database = database;
    }

    [HttpPost]
    [Route("")]
    [AllowAnonymous]
    public async Task<ActionResult<dynamic>> Authenticate(
      [FromServices] DataContext context,
      [FromBody]User model)
    {
      var users = await this.Database.Users.ToListAsync();
      var user = users.Where(user => user.Email == model.Email).First();

      if( user == null || user.Password != model.Password ) return NotFound(new { message = "Usuário ou senha inválidos" });

      var token = TokenService.GenerateToken(user);
      user.Password = "";
      return new
      {
        user = user,
        token = token
      };
    }
  }
}


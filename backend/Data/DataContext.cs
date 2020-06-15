using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
  public class DataContext : DbContext
  {

    public DataContext()
    {
      this.Database.EnsureCreated();
    }
    override protected void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
      optionsBuilder.UseSqlite("Data source=database.db");
    }
    

      public DbSet<User> Users { get; set; }
      public DbSet<Room> Rooms { get; set; }
      public DbSet<Reunion> Reunions { get; set; }

  }
}
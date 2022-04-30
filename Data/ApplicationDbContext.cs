using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyReduxTemplate.Models;

#nullable disable

namespace MyReduxTemplate.Data
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected ApplicationDbContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("Data Source=./app.db");
            }

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WeatherForecast>(builder =>
            {
                builder.Property(x => x.Id)
                       .ValueGeneratedOnAdd();

                builder.Property(x => x.Date)
                       .HasDefaultValue(DateTime.Now);
            });

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    }
}
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Test.Core.Domain;

namespace Test.Core.Context
{
    public class ApplicationDbContext:DbContext
    {
        
        public ApplicationDbContext( DbContextOptions<ApplicationDbContext> options)
            :base(options)
        {
           
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Seed();
        }
    }
}

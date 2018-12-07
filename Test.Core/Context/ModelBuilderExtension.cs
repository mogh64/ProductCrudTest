using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Test.Core.Domain;

namespace Test.Core.Context
{
    
    public static class ModelBuilderExtension
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<ProductCategory>().HasData(DataInitializer.GetProductCategories());
        }
    }
}

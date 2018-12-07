using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Test.Core.Context;
using Test.Core.EF;
using Test.Core.Repositories;
using Xunit;

namespace Test.Core.Test.Repository
{
  
    public class ProductRepositoryTest
    {
     
        private IConfigurationRoot _configuration;
        private readonly DbContextOptions<ApplicationDbContext> _options;

        public ProductRepositoryTest()
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.Development.json");

            _configuration = builder.Build();
            _options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseSqlServer(_configuration["Data:TestApp:ConnectionString"])
                .Options;

        }
       
        [Fact]
        public async Task AddProductTest()
        {
            using (var contex = new ApplicationDbContext(_options))
            {
                
                var repository = new SqlProductRepository(contex);
                await repository.Create(new Domain.Product() { Title = "test", Model = "a", Price = 10 });
                var result =  repository.GetList();

                Assert.True(await result.CountAsync() > 0);
            }
               
        }
        [Fact]
        public async Task Delete()
        {
            using (var contex = new ApplicationDbContext(_options))
            {

                var repository = new SqlProductRepository(contex);
                await repository.Remove(3);
               

              
            }

        }
    }
}

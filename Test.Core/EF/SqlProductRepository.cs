using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Test.Core.Context;
using Test.Core.Domain;
using Test.Core.Repositories;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Test.Core.EF
{
    public class SqlProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext dbContext;

        public SqlProductRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task Create(Product entity)
        {
            entity.CreateDate = DateTime.Now;
           await dbContext.Products.AddAsync(entity);
            await Save();
        }

        public async Task<Product> Get(int id)
        {
           return  await  dbContext.Products.SingleOrDefaultAsync(x => x.Id == id);
           
        }

        public  IQueryable<Product> GetByCategory(int id)
        {
            return  dbContext.Products.Where(x => x.ProductCategoryId == id);
        }

        public  IQueryable<Product> GetList()
        {
            return  dbContext.Products.Include(b=>b.ProductCategory);
        }

        public async Task Remove(int id)
        {
           var item = await Get(id);
            dbContext.Products.Remove(item);
            await Save();
        }

        public async Task Save()
        {
          await  dbContext.SaveChangesAsync();
        }

        public async Task Update(Product entity)
        {
            dbContext.Products.Update(entity);
            await Save();
            
        }
    }
}

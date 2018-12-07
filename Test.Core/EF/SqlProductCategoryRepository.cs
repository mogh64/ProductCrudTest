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
    public class SqlProductCategoryRepository : IProductCategoryRepository
    {
        private readonly ApplicationDbContext dbContext;

        public SqlProductCategoryRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task Create(ProductCategory entity)
        {
            await dbContext.ProductCategories.AddAsync(entity);
            await Save();
        }

        public async Task<ProductCategory> Get(int id)
        {
           return await dbContext.ProductCategories.SingleOrDefaultAsync(x => x.Id == id);
        }

        public IQueryable<ProductCategory> GetList()
        {
            return  dbContext.ProductCategories;
        }

        public async Task Remove(int id)
        {
            var item = await Get(id);
            dbContext.ProductCategories.Remove(item);
            await Save();
        }

        public async Task Save()
        {
           await dbContext.SaveChangesAsync();
        }

        public async Task Update(ProductCategory entity)
        {
            dbContext.ProductCategories.Update(entity);
            await Save();
        }
    }
}

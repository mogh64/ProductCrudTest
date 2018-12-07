using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test.Core.Domain;

namespace Test.Core.Repositories
{
    public interface IProductRepository:IRepository<Product>
    {
        IQueryable<Product> GetByCategory(int id);
    }
}

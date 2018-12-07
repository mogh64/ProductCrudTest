using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test.Core.Domain;

namespace Test.Core.Repositories
{
    public interface IRepository<T> where T:Entity
    {
        Task Remove(int id);
        Task Update(T entity);
        Task Create(T entity);
        IQueryable<T> GetList();
        Task<T> Get(int id);
        Task Save();

    }
}

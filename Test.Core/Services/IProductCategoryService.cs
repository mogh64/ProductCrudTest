using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Test.Core.DTO;

namespace Test.Core.Services
{
    public interface IProductCategoryService
    {
        IEnumerable<ProductCategoryDto> GetList();
        Task<ProductCategoryDto> Get(int id);
    }
}

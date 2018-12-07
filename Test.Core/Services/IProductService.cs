using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Test.Core.DTO;

namespace Test.Core.Services
{
    public interface IProductService
    {
        ProductDto Get(int id);
        IEnumerable<ProductDto> GetByCategoryAsync(int productCategoryId);
        IEnumerable<ProductDto> GetList();
        Task AddAsync(ProductDto productDto);
        Task UpdateAsync(ProductDto productDto);
        Task RemoveAsync(ProductDto productDto);
    }
}

using AutoMapper;
using AutoMapper.QueryableExtensions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Test.Core.DTO;
using Test.Core.Repositories;

namespace Test.Core.Services
{
    public class ProductCategoryService : IProductCategoryService
    {
        private readonly IProductCategoryRepository productCategoryRepository;
        private readonly IMapper mapper;

        public ProductCategoryService(IProductCategoryRepository productCategoryRepository,IMapper mapper)
        {
            this.productCategoryRepository = productCategoryRepository;
            this.mapper = mapper;
        }

        public async Task<ProductCategoryDto> Get(int id)
        {
            var entity =  await productCategoryRepository.Get(id);
            return mapper.Map<ProductCategoryDto>(entity);
        }

        public IEnumerable<ProductCategoryDto> GetList()
        {
            List<ProductCategoryDto> dtoList = new List<ProductCategoryDto>();
            var entityList = productCategoryRepository.GetList();
            foreach (var item in entityList)
            {
               var dto = mapper.Map<ProductCategoryDto>(item);
                dtoList.Add(dto);
            }
           return dtoList;
        }
    }
}

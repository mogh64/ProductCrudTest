using AutoMapper;
using AutoMapper.QueryableExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test.Core.Domain;
using Test.Core.DTO;
using Test.Core.Repositories;

namespace Test.Core.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository productRepository;
        private readonly IMapper mapper;

        public ProductService(IProductRepository productRepository,IMapper mapper)
        {
            this.productRepository = productRepository;
            this.mapper = mapper;
        }

        public async Task AddAsync(ProductDto productDto)
        {
           var entity = mapper.Map<Product>(productDto);
           await productRepository.Create(entity);
            productDto.Id = entity.Id;
        }

        public ProductDto Get(int id)
        {
            try
            {
                var entity = productRepository.Get(id).Result;
                var dto = mapper.Map<ProductDto>(entity);
                return dto;
            }
           catch(Exception ex)
            {
                throw ex;
            }
        }

        public  IEnumerable<ProductDto> GetByCategoryAsync(int productCategoryId)
        {
            List<ProductDto> dtos = new List<ProductDto>();
            var resultEntity =  productRepository.GetByCategory(productCategoryId);
            foreach (var item in resultEntity)
            {
                var dto = mapper.Map<ProductDto>(item);
                dtos.Add(dto);
            }
            return dtos;
        }

        public IEnumerable<ProductDto> GetList()
        {
            List<ProductDto> dtos = new List<ProductDto>();
            var resultEntity = productRepository.GetList();
            foreach (var item in resultEntity)
            {
                var dto = mapper.Map<ProductDto>(item);
                
                dtos.Add(dto);
            }
            return dtos;
        }

        public async Task RemoveAsync(ProductDto productDto)
        {
            await productRepository.Remove(productDto.Id);
        }

        public async Task UpdateAsync(ProductDto productDto)
        {
           var entity = mapper.Map<Product>(productDto);
            await productRepository.Update(entity);
        }
    }
}

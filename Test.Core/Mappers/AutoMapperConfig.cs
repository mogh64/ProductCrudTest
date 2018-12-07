using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Test.Core.Domain;
using Test.Core.DTO;

namespace Test.Core.Mappers
{
    public static class AutoMapperConfig
    {
        public static IMapper GetMapper()
        {
            var config = new MapperConfiguration(c =>
            {
                
             
                c.CreateMap<Product, ProductDto>()             
                .ForMember(d=>d.CategoryId,opt=>opt.MapFrom(src=>src.ProductCategoryId))
                .ForMember(dest=>dest.Category, opt=>opt.MapFrom(src=>src.ProductCategory.Title))
                .ReverseMap();
                c.CreateMap<ProductCategory, ProductCategoryDto>().ReverseMap();
               
            }
            );
            return config.CreateMapper();
        }
       
    }
}

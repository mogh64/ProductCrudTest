using System;
using System.Collections.Generic;
using System.Text;
using Test.Core.Domain;

namespace Test.Core.Context
{
    public class DataInitializer
    {
        public static ProductCategory[] GetProductCategories()
        {
            List<ProductCategory> productCategories = new List<ProductCategory>()
            {
                new ProductCategory()
                {
                    Id =1,
                    Title = "Laptop"
                },
                 new ProductCategory()
                {
                    Id=2,
                    Title = "MObile"
                }
            };
            return productCategories.ToArray();
        }

    }
}

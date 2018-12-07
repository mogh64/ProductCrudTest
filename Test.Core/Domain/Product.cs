using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Core.Domain
{
    public class Product: Entity
    {
        public string Title { get; set; }
        public double Price { get; set; }
        public DateTime? CreateDate { get; set; }
        public string Model { get; set; }
        public int ProductCategoryId { get; set; }
        public virtual ProductCategory ProductCategory { get; set; }
    }
}

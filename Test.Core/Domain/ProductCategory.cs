using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Core.Domain
{
    public class ProductCategory: Entity
    {
        public string Title { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}

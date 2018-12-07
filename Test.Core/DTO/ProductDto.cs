using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Core.DTO
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public string Model { get; set; }
        public int CategoryId { get; set; }
        public string Category { get; set; }
    }
}

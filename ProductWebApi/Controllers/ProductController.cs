using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Test.Core.DTO;
using Test.Core.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }
        // GET: api/Product
        [HttpGet("")]
        public IEnumerable<ProductDto> Get()
        {
            return  productService.GetList();
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public  ProductDto Get(int id)
        {
            return  productService.Get(id);
        }

        // POST: api/Product
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]  ProductDto value)
        {
            await productService.AddAsync(value);
            return Created($"Product {value.Id}", value.Id);
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public async Task Put( [FromBody] ProductDto value)
        {
           await productService.UpdateAsync(value);
        }

        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            ProductDto dto = new ProductDto() { Id = id };
            await productService.RemoveAsync(dto);
        }
    }
}

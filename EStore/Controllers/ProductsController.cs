using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EStore.Models;
using EStore.Models.Entities;
using Microsoft.Extensions.Logging;

namespace EStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        readonly ILogger<ProductsController> _logger;
        ProductsService _pService;
        public ProductsController(ILogger<ProductsController> logger, ProductsService service)
        {
            _logger = logger;
            _pService = service;
        }

        [HttpGet]
        public ActionResult<CategoryViewModel[]> GetAll()
        {
            try
            {
                return _pService.GetAll();
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest($"Failed to get products: {ex}");
            }
        }

        [HttpGet("{id:int}")]
        [Route("/api/products/{id}")]
        public IActionResult GetByID(int id)
        {
            try
            {
                var product = _pService.GetProductById(id);

                if (product != null) return Ok(product); // Om produkt ej är null, returnera ett ok med produkten
                else return NotFound(); // Använd inbyggd klass för att returnera NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest($"Failed to get products: {ex}");
            }
        }

        [HttpGet]
        [Route("/api/category/{category}")]
        public ActionResult<CategoryViewModel[]> GetByCategory(string category)
        {
            try
            {
                return Ok(_pService.GetProductsByCategory(category));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

        [HttpGet]
        [Route("/api/subCategory/{subcategory}")]
        public ActionResult<CategoryViewModel[]> GetBySubCategory(string subCategory)
        {
            try
            {
                return Ok(_pService.GetProductsBySubCategory(subCategory));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

        [HttpGet]
        [Route("/api/products/popularProducts")]
        public ActionResult<CategoryViewModel[]> GetPopularProducts()
        {
            try
            {
                return Ok(_pService.GetPopularProducts());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }


    }
}

  
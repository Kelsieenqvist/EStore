using EStore.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EStore.Models
{
    public class ProductsService
    {
        MyContext _context;
        public ProductsService(MyContext context)
        {
            _context = context;
        }

        public CategoryViewModel[] GetAll()
        {
            return _context.Products
                .Select(p => new CategoryViewModel
                {
                    Model = p.Model,
                    Brand = p.Brand,
                    Id = p.Id,
                    DateAdded = p.DateAdded,
                    Color = p.Color,
                    Price = p.Price,
                    ImgUrl = p.ImgUrl,
                    Category = p.Category,
                    SubCategory = p.SubCategory


                })
                .ToArray();

        }

        public DetailsViewModel GetProductById(int id)
        {
            return _context.Products
                .Where(p => p.Id == id)
                .Select(p => new DetailsViewModel
                {
                    Id = p.Id,
                    Brand = p.Brand,
                    Model = p.Model,
                    Price = p.Price,
                    Quantity = 0,
                    ImgUrl = p.ImgUrl,
                    ImgUrl2 = p.ImgUrl2,
                    ImgUrl3 = p.ImgUrl3
                }).FirstOrDefault();
        }

        public IEnumerable<Product> GetProductsByCategory2(string category)
        {
            return _context.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public IEnumerable<Product> GetProductsBySubCategory2(string subCategory)
        {
            return _context.Products
                .Where(p => p.SubCategory == subCategory)
                .ToList();
        }

        public CategoryViewModel[] GetProductsByCategory(string category)
        {
            return _context.Products
                .Where(p => p.Category == category)
                .Select(p => new CategoryViewModel
                {
                    Id = p.Id,
                    Brand = p.Brand,
                    Model = p.Model,
                    DateAdded = p.DateAdded,
                    Color = p.Color,
                    Price = p.Price,
                    ImgUrl = p.ImgUrl,
                    ImgUrl2 = p.ImgUrl2,
                    ImgUrl3 = p.ImgUrl3
                }).ToArray();
        }

        public CategoryViewModel[] GetProductsBySubCategory(string subCategory)
        {
            return _context.Products
                .Where(p => p.SubCategory == subCategory)
                .Select(p => new CategoryViewModel
                {
                    Model = p.Model,
                    Brand = p.Brand,
                    Id = p.Id,
                    DateAdded = p.DateAdded,
                    Color = p.Color,
                    Price = p.Price,
                    ImgUrl = p.ImgUrl
                }).ToArray();
        }

        public CategoryViewModel[] GetPopularProducts()
        {
            return _context.Products
                .Where(p => p.NewArrival == true)
                .Select(p => new CategoryViewModel
                {
                    Model = p.Model,
                    Brand = p.Brand,
                    Id = p.Id,
                    DateAdded = p.DateAdded,
                    Color = p.Color,
                    Price = p.Price,
                    ImgUrl = p.ImgUrl
                }).ToArray();

        }
    }
}

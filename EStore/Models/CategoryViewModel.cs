using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EStore.Models
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Color { get; set; }
        public decimal? Price { get; set; }
        public bool? NewArrival { get; set; }
        public string DiscountPrice { get; set; }
        public string ImgUrl { get; set; }
        public string ImgUrl2 { get; set; }
        public string ImgUrl3 { get; set; }
    }
}

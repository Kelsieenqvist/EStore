using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EStore.Models
{
    public class DetailsViewModel
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public decimal? Price { get; set; }
        public int Quantity { get; set; }
        public string ImgUrl { get; set; }
        public string ImgUrl2 { get; set; }
        public string ImgUrl3 { get; set; }
    }
}

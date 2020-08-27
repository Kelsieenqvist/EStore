using System;
using System.Collections.Generic;

namespace EStore.Models.Entities
{
    public partial class Orders
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal Price { get; set; }
        public int DeliveryAddressId { get; set; }
        public DateTime? ShippedDate { get; set; }

        public virtual DeliveryAddress DeliveryAddress { get; set; }
        public virtual AspNetUsers User { get; set; }
    }
}

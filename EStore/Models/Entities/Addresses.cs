using System;
using System.Collections.Generic;

namespace EStore.Models.Entities
{
    public partial class Addresses
    {
        public Addresses()
        {
            AspNetUsers = new HashSet<AspNetUsers>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public virtual ICollection<AspNetUsers> AspNetUsers { get; set; }
    }
}

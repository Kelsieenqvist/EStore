using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace EStore.Controllers
{
    public class AccountController : Controller
    {
        AccountService accountService;

        public AccountController(AccountService service)
        {
            this.accountService = service;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

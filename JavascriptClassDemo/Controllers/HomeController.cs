using JavascriptClassDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace JavascriptClassDemo.Controllers
{   
    public class HomeController : Controller
    {
        public static List<UserRole> userRoleList = new List<UserRole>();

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            userRoleList.Add(new UserRole
            {
                id = 0,
                Name = "Kevin Nguyen",
                Role = "Admin"
            });
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult UserRoles()
        {
            return View(userRoleList);
        }

        [HttpPost]
        public IActionResult AddToUserList(UserRole userRole)
        {
            userRoleList.Add(userRole);//This would be in its own business logic model/class
            return PartialView("Partials/userRoleTableInfo", userRoleList);
        }

        public IActionResult DeleteUser(string name)
        {
            for(int i = 0; i < userRoleList.Count; i++)
            {
                if (userRoleList[i].Name.Contains(name))
                {
                    userRoleList.RemoveAt(i);
                }
            }
           
            return PartialView("Partials/userRoleTableInfo", userRoleList);
        }
    }
}

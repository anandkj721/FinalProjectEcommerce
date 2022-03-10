using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ecom.Models;


namespace ecom.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class OrderdetailsController : ControllerBase
    {
        OrderDetailsDataAccessLayer ObjOrderDetailsDataAccessLayer = new OrderDetailsDataAccessLayer();

      
        private readonly dev_apidbProduct _context;

      

        [HttpGet]
        [Route("api/OrderDetail/Index")]
        public IEnumerable<Orderdetail> Index()
        {
            return ObjOrderDetailsDataAccessLayer.GetAllOrderdetail();
        }


        [HttpGet]
        [Route("api/OrderDetail/Details/{userName}")]
        public List<Orderdetail> Details(string Username)
        {
            return ObjOrderDetailsDataAccessLayer.GetOrderdetailData(Username);
        }


        //for create 
        [HttpPost]
        [Route("api/OrderDetail/Create")]
        public int Create([FromBody] Orderdetail Orderdetail)
        {
            return ObjOrderDetailsDataAccessLayer.AddOrderdetail(Orderdetail);
        }

    }
}

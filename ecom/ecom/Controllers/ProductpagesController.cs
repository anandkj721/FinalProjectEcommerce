using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiDbProductContext;
using ecom.Models;

namespace ecom.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    //added by anandk

    public class ProductpagesController : ControllerBase
    {

        ProductPageDataAccessLayer ObjProductPage = new ProductPageDataAccessLayer();
        [HttpGet]
        [Route("api/Productpages/Index")]
        public IEnumerable<Productpage> Index()
        {
            return ObjProductPage.GetAllProduct();
        }

        [HttpGet]
        [Route("api/Productpages/Details/{id}")]
        public Productpage Details(int id)
        {
            return ObjProductPage.GetProductpageData(id);
        }

        [HttpPost]
        [Route("api/ProductPages/Create")]
        public int Create([FromBody] Productpage productpage)
        {
            return ObjProductPage.AddProduct(productpage);
        }

        [HttpPut]
        [Route("api/ProductPages/Edit/{id}")]
        public int Edit([FromBody] Productpage productpage,int id)
        {
            return ObjProductPage.UpdateProduct(productpage);
        }

        [HttpDelete]
        [Route("api/ProductPages/Delete/{id}")]
        public int Delete(int id)
        {
            return ObjProductPage.DeleteProduct(id);
        }

    }
}

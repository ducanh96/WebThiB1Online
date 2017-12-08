using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebThiB1Online.Areas.admin.Models.UI;
using WebThiB1Online.Models;
namespace WebThiB1Online.Areas.admin.Controllers
{
    public class ChuDeController : Controller
    {
        //
        // GET: /admin/ChuDe/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Chude()
        {
            ViewData["lstChuDe"] = TopicUI.getDSChuDe();
            return View();
        }
        
	}
}
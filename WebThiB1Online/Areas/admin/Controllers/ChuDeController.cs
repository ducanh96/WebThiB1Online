using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebThiB1Online.Areas.admin.Models.UI;
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
            return View();
        }
        public ActionResult Delete(int ID)
        {
            bool check = ChuDeUI.delete(ID);
            if (check)
            {
                ViewBag.msgDelete = 1;
            }
            else
            {
                ViewBag.msgDelete = 0;
            }

            return RedirectToAction("Chude");
        }
	}
}
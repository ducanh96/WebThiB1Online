using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebThiB1Online.Areas.admin.Models.UI;

namespace WebThiB1Online.Areas.admin.Controllers
{
    public class DeThiController : Controller
    {
        // GET: admin/DeThi
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Nghe()
        {
            ViewData["lstDocPart1"] = CauHoiUI.getDSCauHoiDocPart1();
            return View();
        }

        public ActionResult Doc()
        {
            ViewData["lstDocPart1"] = CauHoiUI.getDSCauHoiDocPart1();
            return View();
        }

        public ActionResult Viet()
        {
            ViewData["lstDocPart1"] = CauHoiUI.getDSCauHoiDocPart1();
            return View();
        }

        public ActionResult ThemDeThi()
        {
            return View();
        }

        public ActionResult ThemDeThiNghe()
        {
            ViewData["lstDocPart1"] = CauHoiUI.getDSCauHoiDocPart1();
            return View();
        }
    }
}
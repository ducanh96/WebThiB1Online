using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebThiB1Online.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ReadingVocabulary()
        {
            return View();
        }
        public ActionResult ReadingVocabulary2()
        {
            return View();
        }
        public ActionResult ReadingFillingWords()
        {
            return View();
        }
        public ActionResult ReadingUnderstanding()
        {
            return View();
        }
        public ActionResult SpeakingInterview()
        {
            return View();
        }
        public ActionResult WritingLetter()
        {
            return View();
        }
        public ActionResult ListeningPicture()
        {
            return View();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebThiB1Online.Areas.admin.Models
{
    public class CauHoi
    {
        public int ID { get; set; }
        public string TieuDe { get; set; }
        public string DapAnA { get; set; }
        public string DapAnB { get; set; }
        public string DapAnC { get; set; }
        public string DapAnD { get; set; }
        public string DapAn { get; set; }
        private static List<CauHoi> lst = new List<CauHoi>()
        { new CauHoi()
                {
                    ID = 1,
                    TieuDe = "1. Which chair does the man want?",
                    DapAnA = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnB = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnC = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnD = "Đáp án D câu số " + 1,
                    DapAn = "Đáp án câu " + 1
                },
             new CauHoi()
                {
                    ID = 2,
                    TieuDe = "2. Which chair does the man want?",
                    DapAnA = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnB = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnC = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnD = "Đáp án D câu số " + 2,
                    DapAn = "Đáp án câu " + 2
                },
              new CauHoi()
                {
                    ID = 3,
                    TieuDe = "3. Which chair does the man want?",
                    DapAnA = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnB = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnC = "/Areas/admin/assets/image/1.1.jpg",
                    DapAnD = "Đáp án D câu số " + 3,
                    DapAn = "Đáp án câu " + 3
                },
               
                };

        public static  List<CauHoi> LayDSCauHoi(int MaTopic)
        {
            return lst;
        }
        public static bool deleteCauHoi(int ID)
        {
            int i = CauHoi.lst.FindIndex(x => x.ID == ID);
            if (i > -1)
            {
                CauHoi.lst.RemoveAt(i);
                return true;
            }
            else return false;
        }
    }
  

}
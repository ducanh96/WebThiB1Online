using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebThiB1Online.Areas.admin.Models;

namespace WebThiB1Online.Models
{
    public class DeThi
    {
        public Topic topic { get; set; }
        public List<CauHoi> dsCauHoi { get; set; }
        public int maDeThi { get; set; }
        public List<DeThi> dsDeThi { get; set; }

        public DeThi ChiTietDeThi(int maDeThi)
        {
            return null;
        }
        public DeThi()
        {

        }
        public bool ThemDeThi(DeThi dethi)
        {
            return false;
        }
        public bool SuaDeThi(DeThi dethi)
        {
            return false;
        }
        public bool XoaDeThi(int maDeThi)
        {
            return false;
        }
    }
}
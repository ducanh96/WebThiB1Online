using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebThiB1Online.Areas.admin.Models;

namespace WebThiB1Online.Models
{
    public class Topic
    {
        public int ID { get; set; }
        public string tenTopic { get; set; }
        public int soCauHoi { get; set; }
        public string ghiChu { get; set; }
          
        public static List<Topic> LayDSTopic() { 
            return lst;
        }
        public List<Topic>LayDSCauHoiTrongTopic(int maTopic)
        {
            return null;
        }
        public bool ThemTopic(Topic topic)
        {
            return false;
        }
        public bool SuaTopic(Topic topic)
        {
            return false;
        }
        public static bool XoaTopic(int ID)
        {
            int i = Topic.lst.FindIndex(x => x.ID == ID);
            if (i > -1)
            {
                Topic.lst.RemoveAt(i);
                return true;
            }
            else return false;
        }

        private static List<Topic> lst = new List<Topic>()
        { 
            new Topic()
                {
                    ID = 1,
                    tenTopic = "Nghe part1",
                    soCauHoi = 5,
                    ghiChu= "Nghe tranh hình"
                },
             new Topic()
                {
                    ID = 2,
                    tenTopic = "Nghe part2",
                    soCauHoi = 5,
                    ghiChu= "Nghe hội thoại"
                },
              new Topic()
                {
                    ID = 3,
                    tenTopic = "Nghe part3",
                    soCauHoi = 5,
                    ghiChu= "Yse/No"
                },
        };

    }
}
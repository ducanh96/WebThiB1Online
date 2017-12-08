using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebThiB1Online.Models
{
    public class TopicUI
    {
        public Topic topic { get; set; }
        public LoginUI loginUI { get; set; }
        public void ThemTopic(Topic topic)
        {

        }
        public void SuaTopic(Topic topic)
        {

        }
        public static bool XoaTopic(int maTopic)
        {
            return Topic.XoaTopic(maTopic);
        }
        public static List<Topic> getDSChuDe()
        {
            return Topic.LayDSTopic();
        }
    }
}
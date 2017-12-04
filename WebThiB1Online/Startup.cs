using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebThiB1Online.Startup))]
namespace WebThiB1Online
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

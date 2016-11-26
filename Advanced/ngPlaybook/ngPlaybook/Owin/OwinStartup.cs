using Microsoft.Owin;
using ngPlaybook.Server.Startup;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[assembly: OwinStartup(typeof(OwinStartup))]
namespace ngPlaybook.Server.Startup
{
    public class OwinStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseOAuthAuthorizationServer(new MyOauthOptions());
            app.UseJwtBearerAuthentication(new MyJwtOptions());
        }
    }
}
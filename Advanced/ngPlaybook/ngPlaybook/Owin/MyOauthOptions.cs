using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Owin;
using Microsoft.Owin.Security.OAuth;

namespace ngPlaybook.Server.Startup
{
    public class MyOauthOptions: OAuthAuthorizationServerOptions
    {
        public MyOauthOptions()
        {
            TokenEndpointPath = new Microsoft.Owin.PathString("/token");
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60);
            AccessTokenFormat = new MyJwtFormat();
            Provider = new MyOAuthProvider();
            #if DEBUG
                AllowInsecureHttp = true;
            #endif
        }
    }
}

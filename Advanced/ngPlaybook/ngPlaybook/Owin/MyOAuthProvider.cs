﻿using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace ngPlaybook.Server.Startup
{
    public class MyOAuthProvider: OAuthAuthorizationServerProvider
    {
        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity("otc");
            var username = context.OwinContext.Get<string>("otc:username");
            identity.AddClaim(new Claim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", username));
            identity.AddClaim(new Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", "user"));
            context.Validated(identity);
            return Task.FromResult(0);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            try
            {
                var username = context.Parameters["username"];
                var password = context.Parameters["password"];

                if (username == password)
                {
                    context.OwinContext.Set("otc:username", username);
                    context.Validated();
                }
                else
                {
                    context.SetError("Invalid Credentials");
                    context.Rejected();
                }
            }
            catch (Exception)
            {
                context.SetError("Invalid Credentials");
                context.Rejected();
            }

            return Task.FromResult(0);
        }
    }
}
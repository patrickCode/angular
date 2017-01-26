using System.Web.Optimization;

namespace TaskTracker
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/library").Include(
                "~/Scripts/lib/jquery-{version}.js",
                "~/Scripts/lib/jquery.validate*",
                "~/Scripts/lib/modernizr-*",
                "~/Scripts/lib/bootstrap.js",
                "~/Scripts/lib/respond.js",
                "~/Scripts/lib/respond.js",
                "~/Scripts/lib/angular.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
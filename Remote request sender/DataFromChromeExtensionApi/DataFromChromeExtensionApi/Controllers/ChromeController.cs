using DataFromChromeExtensionApi.Models;
using System.Web.Http;

namespace DataFromChromeExtensionApi.Controllers
{
    [RoutePrefix("api/chrome")]
    public class ChromeController : ApiController
    {
        [HttpPost]
        public string DataFromChrome(ChromeData chromeData)
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(chromeData);
        }
    }
}

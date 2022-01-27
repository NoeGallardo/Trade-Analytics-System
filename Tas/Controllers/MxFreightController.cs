using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Tas.Models;
using Tas.Models.Requests;
using Tas.Models.Response;

namespace Tas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MxFreightController : ControllerBase
    {
        [HttpGet("dropDown")]
        public IActionResult GetDropDownList()
        {
            TradeContext context = new TradeContext();
            var lst = context.MxFreights.Select(m => m.Site).Distinct();
            return Ok(lst);
        }

        [HttpPost]
        public IActionResult getParams(GraficaResponse gr)
        {
            TradeContext context = new TradeContext();
            List<BarChartDataRequest> lst = new List<BarChartDataRequest>();
            foreach (var item in gr.sites)
            {
                BarChartDataRequest bcr = new BarChartDataRequest();
                bcr.label = item;
                bcr.data.Add(context.MxFreights.Where(x => x.Site == item && gr.startDate <= x.Month1 && gr.endDate >= x.Month1).Sum(i => i.Sumofusdamount));
                Console.WriteLine("Ya Paso por aqui por la linea 34 del archivo");
                lst.Add(bcr);
            }

            return Ok(lst);   
        }
    }
}

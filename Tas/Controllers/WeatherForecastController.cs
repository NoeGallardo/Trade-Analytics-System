using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            List<WeatherForecast> lst = new List<WeatherForecast>();
            lst.Add(new WeatherForecast() { data = { 12345.32, 4324663.32 }, label = "Guadalajara" });
            lst.Add(new WeatherForecast() { data = { 12345.32, 4324663.32 }, label = "Tijuana" });
            lst.Add(new WeatherForecast() { data = { 12345.32, 4324663.32 }, label = "Laredo" });
            lst.Add(new WeatherForecast() { data = { 12345.32, 4324663.32 }, label = "CD Mexico" });
            lst.Add(new WeatherForecast() { data = { 12345.32, 4324663.32 }, label = "Boston" });

            return lst;
        }
    }
}

using System.Collections.Generic;

namespace Tas.Models.Requests
{
    public class BarChartDataRequest
    {
        public List<double?> data { get; set; } = new List<double?>();
        public string label { get; set; }
    }
}

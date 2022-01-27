using System;
using System.Collections.Generic;

namespace Tas.Models.Response
{
    public class GraficaResponse
    {
        public DateTime startDate { set; get; } = new DateTime();
        public DateTime endDate { set; get; } = new DateTime();

        public List<string> sites { set; get; } = new List<string>();
    }
}

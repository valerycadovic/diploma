using System;

namespace WebApi.DataAccess.DataModels
{
    public class NewsGetDetailedResponse
    {
        public Guid Id { get; set; }

        public string Image { get; set; }

        public string Header { get; set; }

        public string DetailedViewContent { get; set; }
    }
}

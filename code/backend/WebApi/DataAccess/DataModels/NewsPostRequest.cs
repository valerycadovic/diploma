using System;

namespace WebApi.DataAccess.DataModels
{
    public class NewsPostRequest
    {
        public Guid Id { get; set; }

        public string Image { get; set; }

        public string Header { get; set; }

        public string ListViewContent { get; set; }

        public string DetailedViewContent { get; set; }

        public bool IsUrgent { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }
    }
}

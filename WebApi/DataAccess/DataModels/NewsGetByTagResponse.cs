using System;

namespace WebApi.DataAccess.DataModels
{
    public class NewsGetByTagResponse
    {
        public Guid Id { get; set; }

        public string Image { get; set; }

        public string ListViewContent { get; set; }

        public bool IsUrgent { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }
    }
}

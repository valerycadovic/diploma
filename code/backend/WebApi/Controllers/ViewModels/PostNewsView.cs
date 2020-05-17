using System.Collections.Generic;

namespace WebApi.Controllers.ViewModels
{
    public class PostNewsView
    {
        public string Image { get; set; }

        public string Header { get; set; }

        public string ListViewContent { get; set; }

        public string DetailedViewContent { get; set; }

        public bool IsUrgent { get; set; }

        public List<string> Tags { get; set; }
    }
}

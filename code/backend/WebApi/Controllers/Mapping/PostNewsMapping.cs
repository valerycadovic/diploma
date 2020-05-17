using System;
using WebApi.Controllers.ViewModels;
using WebApi.DataAccess.DataModels;

namespace WebApi.Controllers.Mapping
{
    public static class PostNewsMapping
    {
        public static NewsPostRequest ToData(this PostNewsView view)
        {
            return new NewsPostRequest
            {
                Id = Guid.NewGuid(),
                Image = view.Image,
                Header = view.Header,
                ListViewContent = view.ListViewContent,
                DetailedViewContent = view.DetailedViewContent,
                IsUrgent = view.IsUrgent,
                CreatedOn = DateTime.Now,

                // mock while authorization is not implemented
                CreatedBy = "Valery Chadovich"
            };
        }
    }
}

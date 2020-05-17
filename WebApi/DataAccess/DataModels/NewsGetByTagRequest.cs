namespace WebApi.DataAccess.DataModels
{
    public class NewsGetByTagRequest
    {
        public string TagName { get; set; }

        public int PageNumber { get; set; }

        public int PageSize { get; set; }
    }
}

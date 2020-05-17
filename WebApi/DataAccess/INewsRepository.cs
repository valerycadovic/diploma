using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.DataAccess.DataModels;

namespace WebApi.DataAccess
{
    public interface INewsRepository
    {
        Task<NewsPostResponse> PostNewsAsync(NewsPostRequest request, List<Tag> tags);

        Task<NewsGetDetailedResponse> GetNewsDetailedAsync(NewsGetDetailedRequest request);

        Task<IEnumerable<NewsGetByTagResponse>> GetNewsByTagAsync(NewsGetByTagRequest request);
    }
}

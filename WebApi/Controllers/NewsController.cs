using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.DataAccess;
using WebApi.DataAccess.DataModels;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        #region Injects

        private readonly INewsRepository _newsRepository;

        public NewsController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        #endregion

        [HttpGet("{newsId}")]
        public async Task<NewsGetDetailedResponse> GetDetailedNews(Guid newsId)
        {
            var request = new NewsGetDetailedRequest { NewsId = newsId };

            return await _newsRepository.GetNewsDetailedAsync(request);
        }
    }
}

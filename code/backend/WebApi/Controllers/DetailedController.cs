using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Controllers.Mapping;
using WebApi.Controllers.ViewModels;
using WebApi.DataAccess;
using WebApi.DataAccess.DataModels;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetailedController : ControllerBase
    {
        #region Injects

        private readonly INewsRepository _newsRepository;

        public DetailedController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        #endregion

        [HttpGet("{newsId}")]
        public async Task<ActionResult<NewsGetDetailedResponse>> GetDetailedView(Guid newsId)
        {
            NewsGetDetailedRequest request = new NewsGetDetailedRequest { NewsId = newsId };
            NewsGetDetailedResponse result = await _newsRepository.GetNewsDetailedAsync(request);

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }

        [HttpPost]
        public async Task<ActionResult<NewsGetDetailedResponse>> PostNews(PostNewsView view)
        {
            NewsPostRequest data = view.ToData();
            List<Tag> tags = view.Tags.Select(tag => new Tag { Name = tag }).ToList();

            NewsPostResponse savedNews = await _newsRepository.PostNewsAsync(data, tags);

            return CreatedAtAction(nameof(PostNews), new {newsId = savedNews.Id}, savedNews);
        }
    }
}

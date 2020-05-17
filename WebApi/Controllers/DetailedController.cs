using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
            var request = new NewsGetDetailedRequest { NewsId = newsId };

            var result = await _newsRepository.GetNewsDetailedAsync(request);

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }
    }
}

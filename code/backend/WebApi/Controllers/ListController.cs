using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.DataAccess;
using WebApi.DataAccess.DataModels;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListController : ControllerBase
    {
        #region Injects

        private readonly INewsRepository _newsRepository;

        public ListController(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        #endregion
        
        [HttpGet]
        public async Task<IEnumerable<NewsGetByTagResponse>> GetListView(string tag, int page, int size = 20)
        {
            var request = new NewsGetByTagRequest { PageNumber = page, PageSize = size, TagName = tag };

            return await _newsRepository.GetNewsByTagAsync(request);
        }
    }
}

using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using DapperParameters;
using Microsoft.Extensions.Configuration;
using WebApi.DataAccess.DataModels;
using static WebApi.DataAccess.SqlConstants;

namespace WebApi.DataAccess
{
    public class NewsRepository : INewsRepository
    {
        private readonly string _connectionString;

        public NewsRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
        }

        public async Task<NewsPostResponse> PostNewsAsync(NewsPostRequest request, List<Tag> tags)
        {
            await using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();
            
            var parameters = new DynamicParameters(request);
            parameters.AddTable(TagsListType.parameterName, TagsListType.typeName, tags);

            return await connection.QueryFirstAsync<NewsPostResponse>(ExecNewsPost, parameters);
        }

        public async Task<NewsGetDetailedResponse> GetNewsDetailedAsync(NewsGetDetailedRequest request)
        {
            await using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            return await connection.QueryFirstOrDefaultAsync<NewsGetDetailedResponse>(ExecNewsGetDetailed, request);
        }

        public async Task<IEnumerable<NewsGetByTagResponse>> GetNewsByTagAsync(NewsGetByTagRequest request)
        {
            await using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            return await connection.QueryAsync<NewsGetByTagResponse>(ExecNewsGetListViewsByTag);
        }
    }
}

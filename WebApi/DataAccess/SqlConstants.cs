namespace WebApi.DataAccess
{
    public static class SqlConstants
    {
        public const string ExecNewsPost = @"
                                            exec dbo.News_Post 
                                            @Id = @Id,
                                            @Image = @Image,
                                            @Header = @Header,
                                            @ListViewContent = @ListViewContent,
                                            @DetailedViewContent = @DetailedViewContent,
                                            @CreatedOn = @CreatedOn,
                                            @CreatedBy = @CreatedBy";

        public const string ExecNewsGetDetailed = @"
                                            exec dbo.News_GetDetailed 
                                            @NewsId = @NewsId";

        public const string ExecNewsGetListViewsByTag = @"
                                            exec dbo.News_GetListViews_ByTag
                                            @TagName = @TagName,
                                            @PageNumber = @PageNumber,
                                            @PageSize = @PageSize";

        public static readonly (string parameterName, string typeName) TagsListType = ("@Tags", "TagsList");
    }
}

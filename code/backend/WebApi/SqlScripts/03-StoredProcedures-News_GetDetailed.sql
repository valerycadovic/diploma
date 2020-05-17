create procedure dbo.News_GetDetailed (@NewsId uniqueidentifier) as
begin
	set nocount on

	select n.Id, n.Image, n.Header, n.DetailedViewContent
	from dbo.News n
	where n.Id = @NewsId
end
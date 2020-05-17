create procedure dbo.News_GetListViews_ByTag (@TagName nvarchar(100), @PageNumber int, @PageSize int) as
begin
	set nocount on

	select sub.Id, sub.Image, sub.Header, sub.ListViewContent, sub.CreatedOn, sub.CreatedBy
	from 
	(
		select n.Id, n.Image, n.Header, n.ListViewContent, n.CreatedOn, n.CreatedBy
		from News n
		join NewsToTags nt on nt.NewsId = n.Id
		join Tags t on t.Id = nt.TagId
		where t.Name = @TagName
	) as sub
	order by sub.CreatedOn desc

	offset @PageSize * (@PageNumber - 1) rows

	fetch next @PageSize rows only
end
create proc dbo.News_Post
(
	@Id uniqueidentifier,
	@Image nvarchar(max),
	@Header nvarchar(100),
	@ListViewContent nvarchar(200),
	@DetailedViewContent nvarchar(max),
	@CreatedOn datetime2,
	@CreatedBy nvarchar(100)
) as
begin
	set nocount on

	insert into dbo.News 
	(
		Id,
		Image,
		Header,
		ListViewContent,
		DetailedViewContent,
		CreatedOn,
		CreatedBy,
		ModifiedOn,
		ModifiedBy
	)
	values
	(
		@Id,
		@Image,
		@Header,
		@ListViewContent,
		@DetailedViewContent,
		@CreatedOn,
		@CreatedBy,
		null,
		null
	)

	select 
		n.Id,
		n.Image,
		n.Header,
		n.ListViewContent,
		n.DetailedViewContent,
		n.CreatedOn,
		n.CreatedBy,
		n.ModifiedOn,
		n.ModifiedBy
	from dbo.News n
	where n.Id = @Id
end
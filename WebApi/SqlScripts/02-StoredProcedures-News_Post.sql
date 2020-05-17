create type dbo.TagsList as table
(
	Name nvarchar(100)
)

go

create procedure dbo.News_Post
(
	@Id uniqueidentifier,
	@Image nvarchar(max),
	@Header nvarchar(100),
	@ListViewContent nvarchar(200),
	@DetailedViewContent nvarchar(max),
	@IsUrgent bit,
	@CreatedOn datetime2,
	@CreatedBy nvarchar(100),
	@Tags as dbo.TagsList readonly
) as
begin
	set nocount on

	begin try
		begin transaction
			insert into dbo.News 
			(
				Id,
				Image,
				Header,
				ListViewContent,
				DetailedViewContent,
				IsUrgent,
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
				@IsUrgent,
				@CreatedOn,
				@CreatedBy,
				null,
				null
			)

			merge Tags as target
			using (select Name from @Tags) as source
			on (target.Name = source.Name)
			when not matched then
			insert (Id, Name)
			values (newid(), source.Name);

			insert into NewsToTags (Id, NewsId, TagId)
			select newid(), @Id, t.Id
			from Tags t
			where t.Name in
			(
				select Name 
				from Tags
			)

		commit
	end try
	begin catch
		rollback
	end catch

	select 
		n.Id,
		n.Image,
		n.Header,
		n.ListViewContent,
		n.DetailedViewContent,
		n.IsUrgent,
		n.CreatedOn,
		n.CreatedBy,
		n.ModifiedOn,
		n.ModifiedBy
	from dbo.News n
	where n.Id = @Id
end
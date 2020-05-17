create table dbo.News
(
	Id uniqueidentifier primary key,
	Image nvarchar(max) not null,
	Header nvarchar(100) not null,
	ListViewContent nvarchar(200) not null,
	DetailedViewContent nvarchar(max) not null,
	CreatedOn datetime2 not null,
	CreatedBy nvarchar(100) not null,
	ModifiedOn datetime2,
	ModifiedBy nvarchar(100),
)

go

create table dbo.Tags
(
	Id uniqueidentifier primary key,
	Name nvarchar(100)
)

go

create table dbo.NewsToTags
(
	Id uniqueidentifier primary key,
	NewsId uniqueidentifier not null,
	TagId uniqueidentifier not null
)

go

alter table dbo.NewsToTags
add constraint FK_NewsToTags_News foreign key (NewsId) references dbo.News (Id)
on update cascade
on delete cascade

go

alter table dbo.NewsToTags
add constraint FK_NewsToTags_Tags foreign key (TagId) references dbo.Tags (Id)
on update cascade
on delete cascade

go
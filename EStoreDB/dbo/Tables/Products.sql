CREATE TABLE [dbo].[Products] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [Date_Added]     DATETIME2 (7) NOT NULL,
    [Brand]          VARCHAR (32)  NOT NULL,
    [Model]          VARCHAR (32)  NOT NULL,
    [Category]       VARCHAR (32)  NULL,
    [SubCategory]    VARCHAR (32)  NULL,
    [Color]          VARCHAR (32)  NULL,
    [Price]          MONEY         NULL,
    [New_Arrival]    BIT           NULL,
    [Discount_Price] NCHAR (10)    NULL,
    [ImgURL]         VARCHAR (MAX) NULL,
    [imgURL2]        VARCHAR (MAX) NULL,
    [imgURL3]        VARCHAR (MAX) NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([Id] ASC)
);


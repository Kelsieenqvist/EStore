CREATE TABLE [dbo].[Addresses] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [FirstName] VARCHAR (32) NOT NULL,
    [LastName]  VARCHAR (32) NOT NULL,
    [Street]    VARCHAR (32) NOT NULL,
    [ZipCode]   VARCHAR (10) NOT NULL,
    [City]      VARCHAR (32) NOT NULL,
    [Country]   VARCHAR (32) NULL,
    CONSTRAINT [PK_Addresses] PRIMARY KEY CLUSTERED ([Id] ASC)
);


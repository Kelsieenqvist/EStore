CREATE TABLE [dbo].[DeliveryAddress] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [FirstName] VARCHAR (32) NOT NULL,
    [LastName]  VARCHAR (32) NOT NULL,
    [Street]    VARCHAR (32) NOT NULL,
    [ZipCode]   VARCHAR (10) NOT NULL,
    [City]      VARCHAR (32) NOT NULL,
    [Country]   VARCHAR (32) NULL,
    CONSTRAINT [PK_DeliveryAddress] PRIMARY KEY CLUSTERED ([Id] ASC)
);


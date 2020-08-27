CREATE TABLE [dbo].[Orders] (
    [Id]                INT            IDENTITY (1, 1) NOT NULL,
    [UserID]            NVARCHAR (450) NOT NULL,
    [Order_Date]        DATETIME2 (7)  NOT NULL,
    [Price]             MONEY          NOT NULL,
    [DeliveryAddressID] INT            NOT NULL,
    [ShippedDate]       DATETIME2 (7)  NULL,
    CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Orders_AspNetUsers] FOREIGN KEY ([UserID]) REFERENCES [dbo].[AspNetUsers] ([Id]),
    CONSTRAINT [FK_Orders_DeliveryAddress] FOREIGN KEY ([DeliveryAddressID]) REFERENCES [dbo].[DeliveryAddress] ([Id])
);


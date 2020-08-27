CREATE TABLE [dbo].[OrderDetails] (
    [OrderID]   INT NOT NULL,
    [ProductID] INT NOT NULL,
    [Quantity]  INT NOT NULL,
    CONSTRAINT [FK_OrderDetails_Orders] FOREIGN KEY ([OrderID]) REFERENCES [dbo].[Orders] ([Id]),
    CONSTRAINT [FK_OrderDetails_Products] FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Products] ([Id])
);


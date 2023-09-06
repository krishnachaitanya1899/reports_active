export const dataSource = {
    Name: "Northwind",
    ConnectionProperties: {
      DataProvider: "JSON",
      ConnectString: "endpoint=https://demodata.grapecity.com/northwind/api/v1",
    },
  };
  
  export const categoriesDataSet = {
    Name: "Categories",
    Query: {
      DataSourceName: "Northwind",
      CommandText: "uri=/Categories;jpath=$.[*]",
    },
    Fields: [
      { Name: "categoryId", DataField: "categoryId" },
      { Name: "categoryName", DataField: "categoryName" },
      { Name: "description", DataField: "description" },
    ],
  };
  
  export const productsDataSet = {
    Name: "Products",
    Query: {
      DataSourceName: "Northwind",
      CommandText: "uri=/Products;jpath=$.[*]",
    },
    Fields: [
      { Name: "productId", DataField: "productId" },
      { Name: "productName", DataField: "productName" },
      { Name: "supplierId", DataField: "supplierId" },
      { Name: "categoryId", DataField: "categoryId" },
      { Name: "quantityPerUnit", DataField: "quantityPerUnit" },
      { Name: "unitPrice", DataField: "unitPrice" },
      { Name: "unitsInStock", DataField: "unitsInStock" },
      { Name: "unitsOnOrder", DataField: "unitsOnOrder" },
      { Name: "reorderLevel", DataField: "reorderLevel" },
      { Name: "discontinued", DataField: "discontinued" },
    ],
  };
  
  export const dataSources = [
    {
      id: "Northwind",
      title: "Northwind",
      template: dataSource,
      canEdit: false,
      datasets: [
        {
          id: "Categories",
          title: "Categories",
          template: categoriesDataSet,
          canEdit: false,
        },
        {
          id: "Products",
          title: "Products",
          template: productsDataSet,
          canEdit: false,
        }
      ]
    }
  ]
  
  export const images = [
    {
      id: "images/ambulance.svg",
      displayName: "Ambulance",
      mimeType: "image/svg",
    },
    {
      id: "images/bed.svg",
      displayName: "Bed",
      mimeType: "image/svg",
    },
    {
      id: "images/blooddonation.svg",
      displayName: "Blood Donation",
      mimeType: "image/svg",
    },
    {
      id: "images/siren.svg",
      displayName: "Siren",
      mimeType: "image/svg",
    },
  ];
  
  export const reports = [
    {
      id: "reports/CustomersTable.rdlx-json",
      displayName: "Customers Table",
    },
    {
      id: "reports/TaxiDrives.rdlx-json",
      displayName: "Taxi Drive Report",
    },
  ];
  
  
  
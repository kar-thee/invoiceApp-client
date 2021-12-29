const dropDownList = [
  {
    menuName: "Invoice",
    menuList: [
      { to: "/app/invoice/create", name: "Create" },
      { to: "/app/invoice/readAll", name: "List All" },
    ],
  },
  {
    menuName: "User",
    menuList: [
      { to: "/app/user/create", name: "Create" },
      { to: "/app/user/readAll", name: "List All" },
    ],
  },
  {
    menuName: "Product",
    menuList: [
      { to: "/app/product/create", name: "Create" },
      { to: "/app/product/readAll", name: "List All" },
    ],
  },
];
export default dropDownList;

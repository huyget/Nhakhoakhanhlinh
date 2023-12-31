export const adminMenu = [
  {
    //quan lys nguoi dung
    //quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.crud",
        link: "./system/user-manage",
        //link: "/system/user-redux",
      },
      {
        name: "menu.admin.crud-redux",
        link: "/system/Admin/user-redux",
      },
      {
        name: "menu.admin.manage-doctor",
        link: "./system/user-doctor",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
        //   {
        //     name: "menu.system.system-administrator.user-redux",
        //     link: "/system/user-redux",
        //   },
        // ],
      },
      {
        name: "menu.admin.manage-admin",
        link: "./system/user-admin",
      },

      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //quan lys phong kham

    name: "menu.admin.clinic",
    menus: [
      {
        name: "menu.admin.manage-clinic",
        link: "./system/manage-clinic",
      },

      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //quan ly chuyen khoa

    name: "menu.admin.specialty",
    menus: [
      {
        name: "menu.admin.manage-specialty",
        link: "./system/manage-specialty",
      },

      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //quan ly cẩm nang

    name: "menu.admin.handbook",
    menus: [
      {
        name: "menu.admin.manage-handbook",
        link: "./system/manage-handbook",
      },

      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
];

type MenuItem = {
  title: string;
  path: string;
  hasSubmenu: boolean;
}

export const menuItems: MenuItem[] = [
  {
    title: "Member",
    path: "member",
    hasSubmenu: true,
  },
  {
    title: "Text",
    path: "texts",
    hasSubmenu: true,
  },

  {
    title: "Exhibition",
    path: "exhibition",
    hasSubmenu: false,
  },
  {
    title: "Interview",
    path: "interview",
    hasSubmenu: true,
  },
  {
    title: "SNS",
    path: "sns",
    hasSubmenu: false,
  },
];

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CollectionsIcon from "@mui/icons-material/Collections";
import HandymanSharpIcon from "@mui/icons-material/HandymanSharp";
import { List } from "@mui/material";
import { ReactNode } from "react";
import SidebarItem from "./SidebarItem";

export type TNavbarItem = {
  path: string;
  title: string;
  icon: ReactNode;
};

const navbarItems: TNavbarItem[] = [
  {
    path: "service",
    title: "Service",
    icon: <HandymanSharpIcon />,
  },
  {
    path: "post",
    title: "Post",
    icon: <AppRegistrationIcon />,
  },
  {
    path: "gallery",
    title: "Gallery",
    icon: <CollectionsIcon />,
  },
];

const SidebarItems = () => {
  return (
    <List>
      {navbarItems.map((item) => (
        <SidebarItem key={item.path} item={item} />
      ))}
    </List>
  );
};

export default SidebarItems;

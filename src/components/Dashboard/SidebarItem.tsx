"use client";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TNavbarItem } from "./SidebarItems";

const SidebarItem = ({ item }: { item: TNavbarItem }) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();

  return (
    <Link href={linkPath} key={item.path} style={{ textDecoration: "none" }}>
      <ListItem
        disablePadding
        sx={{
          ...(linkPath === pathName
            ? {
                borderRight: "3px solid #304ffe",
                "& svg": { color: "primary.main" },
              }
            : {}),
          "&:hover": {
            borderRight: "3px solid #304ffe",
            "& svg": { color: "primary.main" },
          },
        }}
      >
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;

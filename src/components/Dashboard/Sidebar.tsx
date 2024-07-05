import { Divider, Toolbar } from "@mui/material";
import Image from "next/image";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/primary_logo.png"
          alt="ac maintenance logo"
          width={150}
          height={40}
        />
      </Toolbar>
      <Divider />
      <SidebarItems />
    </div>
  );
};

export default Sidebar;

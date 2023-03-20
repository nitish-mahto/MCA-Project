import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const PAGES = [
  "Product",
  "Services",
  "ContactUs",
  "AboutUs",
  "Login",
  "Logout",
];

const DrawerComp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          {/* <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton> */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

import React, { useState } from "react";
import Link from "next/link";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles, Wrapper, StyledPaper, ListMap } from "./sidebar.styles";


const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen({ ...open, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {ListMap.map((item, index) => (
          <Link href={item.destination}key={index}>
            <a>
              <ListItem button >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Wrapper>
      <label>
        <Button
          onClick={toggleDrawer("left", true)}
          variant="contained"
          color="secondary"
        >
          Menu
        </Button>
      </label>

      <Drawer
        anchor="left"
        open={open["left"]}
        onClose={toggleDrawer("left", false)}
        PaperProps={{ component: StyledPaper }}
      >
        {list("left")}
      </Drawer>
    </Wrapper>
  );
};

export default Sidebar;

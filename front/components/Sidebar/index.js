import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Link from "next/link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Wrapper = styled.div`
  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #5bb2fc;
    width: fit-content;
    align-self: center;
    transition: 0.5s all linear;
    margin-top: auto;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

const StyledPaper = styled.div`
  justify-content: space-around;
  color: rgb(255 90 90 /90%) !important;
  background: #24272e !important;
  .MuiListItemIcon-root {
    color: rgb(255 90 90 /90%) !important;
  }
  & > .MuiTypography-body1 {
    text-align: center !important;
  }

  & > .MuiListItem-root {
    justify-content: center;
    text-align: center;
  }
`;

const ListMap = [
  {
    text: "Account",
    icon: <AccountCircleIcon />,
    destination: "/auth/account/cart",
  },
  {
    text: "Emails",
    icon: <MailIcon />,
    destination: "/auth/account/emails",
  },
  {
    text: "Orders",
    icon: <InboxIcon />,
    destination: "/auth/account/orders",
  },
  {
    text: "Products",
    icon: <InboxIcon />,
    destination: "/auth/account/products",
  },
];

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
      <Button
        onClick={toggleDrawer("left", true)}
        variant="contained"
        color="secondary"
      >
        Menu
      </Button>
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

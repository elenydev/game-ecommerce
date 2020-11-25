import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

export const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const Wrapper = styled.div`
  display: flex;

  & > .MuiButton-containedSecondary {
    background-color: #b73d1cbf;
    font-size: 0.8em;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

export const StyledPaper = styled.div`
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

export const ListMap = [
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
    icon: <ShoppingBasketIcon />,
    destination: "/auth/account/products",
  },
  {
    text: "Subscribtions",
    icon: <SubscriptionsIcon />,
    destination: "/auth/account/subscribtions",
  },
];

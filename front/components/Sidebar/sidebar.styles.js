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
    background-color: ${({ theme }) => theme.colors.darkOrange};
    font-size: 0.8em;

    &:hover {
      background-color: ${({ theme }) =>  theme.colors.lightOrange};;
    }
  }
`;

export const StyledPaper = styled.div`
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.bittersweet} !important;
  background: ${({ theme }) => theme.colors.mostlyBlackBlue} !important;
  .MuiListItemIcon-root {
    color: ${({ theme }) => theme.colors.bittersweet} !important;
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

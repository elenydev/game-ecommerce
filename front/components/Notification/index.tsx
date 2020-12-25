import React, { useState } from "react"

import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

type Props = {
  message: string
  shouldOpen: boolean
  variant: string
}

const CustomizedSnackbars = ({
  message,
  shouldOpen,
  variant,
}: Props): JSX.Element => {
  const classes = useStyles()
  const [open, setOpen] = useState(shouldOpen || false)
  const handleClose = (event, reason: string) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default CustomizedSnackbars

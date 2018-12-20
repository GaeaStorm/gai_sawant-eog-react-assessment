import React from "react";
import {withStyles} from "@material-ui/core/styles";

console.log("Wrapper");

const styles = theme => ({
    wrapper: {
        background: theme.palette.background.main,
        height: "175vh"
    }
});

const Wrapper = props => {
    const {classes} = props;
    return <div className={classes.wrapper}>{props.children}</div>;
};

export default withStyles(styles)(Wrapper);

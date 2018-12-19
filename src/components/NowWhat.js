import React from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AvatarRaw from "@material-ui/core/Avatar";
import {MapContainer} from "./MapContainer";
import Drone from "./Drone";

const cardStyles = theme => ({
    root: {
        background: theme.palette.primary.main
    },
    title: {
        color: "white"
    }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
    root: {
        background: theme.palette.primary.main
    },
    title: {
        color: "white"
    }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
    card: {
        margin: "5% 25%"
    }
};

const mapStyles = {
    width: '100%',
    height: '100%'
};

const NowWhat = props => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardHeader title="OK, gai, you're all setup. Now What?" />
            <CardContent style={{width:"600px", height:"400px"}}>
                <Drone/>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(NowWhat);

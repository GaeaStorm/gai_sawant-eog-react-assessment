import React from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import {MapContainer} from "./MapContainer";

const cardStyles = theme => ({
    root: {
        background: theme.palette.primary.main
    },
    title: {
        color: "white"
    }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
    card: {
        margin: "2% 25%"
    }
};

const DroneMap = props => {
    const {classes} = props;
    return (
        <Card className={classes.card}>
            <CardHeader title="Drone Map"/>
            <CardContent style={{width: "400px%", height: "400px"}}>
                <MapContainer/>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(DroneMap);

import {menu} from "./Menu";
import {Collapse, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import {hasChildren} from "../util";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";




export const MenuComponent =()=> {
        return menu.map((item, key) => <MenuItem key={key} item={item} />);
    }

    const MenuItem = ({ item }) => {
        const Component = hasChildren(item) ? MultiLevel : SingleLevel;
        return <Component item={item} />;
    };

    const SingleLevel = ({ item }) => {
        return (
            <ListItem button component={Link} to={item.to || "/404"}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
        );
    };

    const MultiLevel = ({ item }) => {
        const { items: children } = item;
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen((prev) => !prev);
        };

        return (
            <React.Fragment>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((child, key) => (
                            <MenuItem key={key} item={child} />
                        ))}
                    </List>
                </Collapse>
            </React.Fragment>
        );

};

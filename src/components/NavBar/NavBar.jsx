import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Logo from "../../public/Outline.png";
import React from "react";

const menusSelect = ["Admin", "Contact"];

const NavBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.set}>
            <Box className={classes.logo}>
                <img
                    src={Logo}
                    alt="Logo"
                    width="50px"
                    style={{ margin: "0 10px" }}
                />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    CShop Delivery
                </Typography>
            </Box>
            <Box className={classes.menu}>
                {menusSelect.map((menu) => {
                    return (
                        <a href={`${menu.toLowerCase()}`}>
                            <Typography margin="0 20px">{menu}</Typography>
                        </a>
                    );
                })}
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    set: {
        height: "70px",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "white",
        top: "0",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "30px",
    },
    menu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "40px",
    },
}));

export default NavBar;

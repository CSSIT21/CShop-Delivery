import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../../components/Layouts/SideBar";

const Requests = () => {
    return (
        <Sidebar>
            <Box>
                <Typography variant="h4">All Requests</Typography>
            </Box>
        </Sidebar>
    );
};

const useStyles = makeStyles(() => ({
    title: {},
}));

export default Requests;

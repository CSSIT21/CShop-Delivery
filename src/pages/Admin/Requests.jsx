import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Table from "../../components/Admin/Table";
import Sidebar from "../../components/Layouts/SideBar";

const Requests = () => {
    return (
        <Sidebar>
            <Table />
        </Sidebar>
    );
};

const useStyles = makeStyles(() => ({
    title: {},
}));

export default Requests;

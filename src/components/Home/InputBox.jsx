import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#fd6637",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#fd6637",
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: 12,
        "& fieldset": {
            borderColor: "#fd6637",
        },
        "&:hover fieldset": {
            borderColor: "#fd6637",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#fd6637",
        },
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#fd6637"),
    backgroundColor: "#ff845e",
    borderRadius: 12,
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#fd6637",
    },
}));

const InputBox = () => {
    const classes = useStyles();
    return (
        <Box className={classes.inputBox} sx={{ boxShadow: 3 }}>
            <Box className={classes.inputText}>
                <Typography variant="h3" fontWeight={600}>
                    Track your order
                </Typography>
                <Box className={classes.textField}>
                    <CustomTextField sx={{ width: "400px" }} />
                    <ColorButton
                        sx={{
                            width: "100px",
                            height: "55px",
                            margin: "0 10px",
                        }}
                    >
                        <Typography>Track</Typography>
                    </ColorButton>
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles(() => ({
    inputBox: {
        backgroundColor: "white",
        width: "800px",
        height: "350px",
        borderRadius: "15px",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    inputText: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    textField: {
        margin: "30px 0",
    },
}));

export default InputBox;

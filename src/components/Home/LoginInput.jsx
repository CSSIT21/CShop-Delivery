import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ColorButton from "../../styles/CustomMui/ColorButton";
import CustomTextField from "../../styles/CustomMui/CustomTextField";

const LoginInput = () => {
    const classes = useStyles();

    return (
        <Box className={classes.inputBox} sx={{ boxShadow: 3 }}>
            <Box className={classes.inputSubBox}>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    sx={{ margin: "20px 0" }}
                >
                    Login
                </Typography>
                <Box className={classes.textFieldBox}>
                    <CustomTextField
                        sx={{ margin: "10px 0" }}
                        placeholder="username"
                    />
                    <CustomTextField
                        sx={{ margin: "10px 0" }}
                        placeholder="password"
                    />
                    <ColorButton
                        size="large"
                        fullWidth
                        sx={{ margin: "10px 0", height: "50px" }}
                    >
                        Login
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
        height: "auto",
        borderRadius: "15px",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "calc((100vh - 292px) /2)",
        marginBottom: "80px",
    },
    textFieldBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    inputSubBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
}));

export default LoginInput;

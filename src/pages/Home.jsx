import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import InputBox from "../components/Home/InputBox";
import Express from "../public/Express.jpg";

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.section}>
            <InputBox />
        </Box>
    );
};

const useStyles = makeStyles(() => ({
    section: {
        backgroundImage: `url(${Express})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default Home;

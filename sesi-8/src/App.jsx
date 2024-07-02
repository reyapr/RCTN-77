import "./style.css";
import Example1 from "./component/Example1";
import Example2 from "./component/Example2";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="app-bar">
          <div className="menu">
            <div>Home</div>
            <div>Feature</div>
            <div>FAQs</div>
            <div>About</div>
          </div>
          <div className="menu">
            <div>Login</div>
            <div>Sign Up</div>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className="header">
        <Toolbar className="app-bar">
          <div className="menu">
            <div>My First React App</div>
          </div>
          <div className="menu">
            <TextField placeholder="Search" />
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper
          elevation={24}
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
            padding: "5%",
            paddingRight: "50%",
          }}
        >
          <Box display={"flex"} gap={2} flexDirection={"column"}>
            <Typography variant="h4">First Paragraph in Jumbotron</Typography>
            <Typography variant="p">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </Typography>
          </Box>
          <Button sx={{ marginTop: "16px" }} variant="contained">
            Click Me
          </Button>
        </Paper>
        <Divider
          sx={{
            borderWidth: "1px",
            borderColor: "black",
          }}
          flexItem
        />
        <Box sx={{ marginTop: "25px", marginLeft: "10px", color: "gray" }}>
          <Typography>This is My First React app in MUI</Typography>
          <Typography>
            New to React? <a href="https://mui.com">Visit the homepage</a>
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Button variant="contained">Click Me</Button>
      </Box>
      {/* <Example1 /> */}
      {/* <br /> */}
      {/* <Example2 /> */}
    </>
  );
}

export default App;

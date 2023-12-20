import { useContext } from "react";
import { ColorModeContext } from "../../pages/theme";
import { Box, Container, IconButton, Stack, useTheme } from "@mui/material";
import { DarkModeOutlined, GitHub, Instagram, LightModeOutlined, Twitter } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';

const Header_Top = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "#666",

    }}

    >
     <Container >
<Stack direction={"row"} alignItems={"center"}>

       {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined sx={{ color: "#fff", fontSize: "20px" }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined sx={{ color: "#fff", fontSize: "20px" }} />
          </IconButton>


        )}
        <Box sx={{flexGrow: 1 }}/>
        <FacebookIcon sx={{ color: "#fff", fontSize: "20px" , cursor: "pointer" ,marginRight:"3px"
     }}/>
     <Twitter sx={{ color: "#fff", fontSize: "20px" , cursor: "pointer" ,marginRight:"3px"
    }}/>
        <Instagram sx={{ color: "#fff", fontSize: "20px" , cursor: "pointer" ,marginRight:"3px"
     }}/>
     <GitHub sx={{ color: "#fff", fontSize: "20px" , cursor: "pointer" ,marginRight:"3px"
    }}/>




</Stack>



      </Container>
    </Box>
  );
};

export default Header_Top;

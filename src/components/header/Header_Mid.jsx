
import { AppBar, Toolbar, Typography, useTheme,
useMediaQuery,
Grid,
Link} from '@mui/material'
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerComp from '../Drawer/Drawer';


import { useState } from 'react';


const Header_Mid = ({links}) => {
    //State
    const [value, setValue] = useState();

    //Theme
    const theme = useTheme();
    // media query breakpoints
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar sx={{ position:"relative" }} >
        <Toolbar>


         { isMatch ? <>
            <Typography>
                        <StoreSharpIcon />
                    </Typography>
         <DrawerComp links={links} /> </>

         :

         <Grid sx={{placeItems: 'center'}} container>

                <Grid item xs={2} >
                    <Typography>
                        <StoreSharpIcon />
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Tabs TabIndicatorProps={{style: {background:'#fff'}}}
                    textColor='inherit'
                     value={value}
                     onChange={(e, val) => setValue(val) }
                     >

                    </Tabs>

                </Grid>

                <Grid item xs={1} />

                <Grid item xs={3}>
                    <Box display='flex' >
                    <Link href="/login">
                       <Button variant="contained"
                        sx={{marginLeft: 'auto', background: '#333',color:"#fff", fontWeight:"bold" }}
                        >
                            Login
                        </Button>
                    </Link>

                        <Link href='/register'>

                        <Button sx={{marginLeft: 1, background:'#333',color:"#fff",  fontWeight:"bold"}}
                         variant="contained"  >
                            SignUp
                        </Button>
                        </Link>
                    </Box>
                </Grid>

            </Grid>


        }

        </Toolbar>
    </AppBar>
  )
}

export default Header_Mid;

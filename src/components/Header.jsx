import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/Litcab-Taxi.png'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: '#28527A',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "110%", 
                    height:"110%",
                    marginBottom: 10,
                }}
                />
            </Box>
            <BoxText 
            component='section'
            sx={{
                paddingLeft:'0rem',
                paddingRight:'6rem',
                textAlign:'right'
            }}
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#F4D160',
                    
                }}
                >
                    We'll build house of your dream
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#FBEEAC',
                }}
                >
                    We have 9000 more review and our customers
                    trust on out property and quality products.
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/AdvertiserProfile'}
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#DCF2F1',
                        backgroundColor: '#022039',
                        opacity:'0.98',
                        "&&:hover": {
                            color:'#28527A',
                            backgroundColor: "#F4D160"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        I'm an advertiser
                    </Button>
                    <Button 
                    component={Link} 
                    to={'/DriverProfile'}
                    variant='contained'
                    sx={{
                        mr:2,
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#DCF2F1',
                        backgroundColor: '#022039',
                        opacity:'0.98',
                        "&&:hover": {
                            color:'#28527A',
                            backgroundColor: "#F4D160"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        I'm a driver
                    </Button>
                </Box>
            </BoxText>

            

        </CustomBox>
    )
}

export default Header
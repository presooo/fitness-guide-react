import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// import HeroBannerImage from '../assets/images/banner.png';
import HeroBannerImage from '../assets/images/gym-logo.jpeg';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color="#4baadb" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>

            <Typography fontWeight="700" sx={{
                fontSize: { lg: '44px', xs: '40px' }
            }} mb="23px" mt="30px">
                Sweat, Smile <br /> and Repeat
            </Typography>

            <Typography fontSize="20px" lineHeight="35px" mb={4}>
                Checkout the most effective exercises
            </Typography>

            <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#4baadb', padding: '10px' }}>
                Explore Exercises
            </Button>

            <Typography fontWeight="600" color="#4baadb" fontSize="200px" sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }}>
                Exercise
            </Typography>

            <img src={HeroBannerImage} className="hero-banner-img" />
        </Box >
    )
}

export default HeroBanner
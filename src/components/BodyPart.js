import React from 'react'
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

import Logo from '../assets/images/footer-logo.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? "4px solid #4baadb" : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Logo} style={{ height: "40px", width: '40px' }} />

            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#3A1212'
                textTransform='capitalize'
            >
                {item}
            </Typography>
        </Stack >
    )
}

export default BodyPart
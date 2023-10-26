import React from 'react';
import me from '../../assets/img/me.png'
import {
  Container,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Navbar } from '../Molecules';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

export function Home() {

    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    const startDate = new Date('08/01/2019');
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();

    if (currentDate.getMonth() < startDate.getMonth() || (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
        yearsDifference--;
    }

    const rouletteOptions = [
        "20,000+ Users", //TO:DO Implement Visual Studio marketplace api so we don't have to edit this
        `${yearsDifference} Years of Experience`,
        "Passion for Data"
    ]

    const highlightDuration = 1000;
  
    useEffect(() => {
        const typeOption = () => {
          const typedOption = rouletteOptions[currentOptionIndex];
          let currentIndex = 0;
          const intervalId = setInterval(() => {
            if (currentIndex === typedOption.length) {
              setTimeout(() => {
                setCurrentOptionIndex((currentOptionIndex + 1) % rouletteOptions.length);
              }, 2000);
              clearInterval(intervalId);
            } else {
              setTypedText(typedOption.slice(0, currentIndex + 1));
              currentIndex++;
            }
          }, highlightDuration / typedOption.length);
        };
    
        typeOption();
      }, [currentOptionIndex]);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${me})`,
          backgroundSize: 'cover',
          height: '92.78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // Make the box a positioning context
        }}
      >
        <Box
          className="gradient-overlay"
          sx={{
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right bottom, rgba(14, 14, 14, 0.9) 0%, rgba(14, 14, 14, 0.75) 20%, rgba(14, 14, 14, 0.65) 40%, rgba(14, 14, 14, 0.5) 60%, rgba(14, 14, 14, 0.4) 100%)',
            zIndex: 1, // Place the gradient overlay below the text
          }}
        />
        <Container maxWidth="sm" sx={{ color: "white", position: 'relative', zIndex: 2 }}>
          <Typography variant='body1' gutterBottom sx={{ fontFamily: "Anton", fontWeight: 'light', color: "#a58c71" }}>
            Welcome to my portfolio
          </Typography>
          <Typography variant="h2" paragraph sx={{ fontFamily: "Anton" }}>
            Hi, I'm Justin
          </Typography>
          <Typography id="typing-animation" variant="h2" paragraph sx={{ fontFamily: "Anton", color: "#5f6d45" }}>
            {typedText}&nbsp; 
          </Typography>
          <Typography variant="h4" gutterTop sx={{ fontFamily: "Anton" }}>
            Software Engineer
          </Typography>
          <IconButton href="https://www.linkedin.com/in/justin-yates887/" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ color: '#a58c71' }} />
          </IconButton>
          <IconButton href="https://github.com/justinyates887" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ color: '#a58c71' }} />
          </IconButton>
          <IconButton href="https://www.instagram.com/justinyates887" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{ color: '#a58c71' }} />
          </IconButton>
        </Container>
      </Box>
    </>
  );
}

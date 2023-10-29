import React from 'react';
import Card from '@mui/material/Card';

export function LoadingCard() {
  return (
    <Card
      sx={{
        width: '70%',
        height: '25vh',
        background: 'linear-gradient(90deg, #191919, #0e0e0e, #191919)',
        backgroundSize: '200% 100%',
        animation: 'glossyAnimation 4s infinite linear',
        m: 2,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    ></Card>
  );
}

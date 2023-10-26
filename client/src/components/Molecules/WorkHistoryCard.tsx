import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function WorkHistoryCard(props) {
  return (
    <Card 
    sx={{
        width: '70%',
        background: '#353535',
        color: 'white',
        margin: "auto"
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="gray" gutterBottom>
          {props.company}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="gray">
          Under: {props.supervisor}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
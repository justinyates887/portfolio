import * as React from 'react';
import { Chip, Card, CardContent, Typography } from '@mui/material';

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
        {props.tags?.map((tag) => (
          <Chip
            sx={{ fontSize: 12, color: 'inherit', marginTop: "10px"}}
            label={tag}
          />
        ))}
      </CardContent>
    </Card>
  );
}
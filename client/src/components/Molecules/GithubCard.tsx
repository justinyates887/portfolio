import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  // Ensure leading zeros for single-digit day and month
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');

  return `${formattedMonth}/${formattedDay}/${year}`;
}

function formatText(text) {
  text = text.replace(/[-_]/g, ' ');
  text = text.replace(/\b\w/g, (match) => match.toUpperCase());
  return text;
}

function formatLanguage(language){
  switch(language){
    case "C#":
      return "#11623380"
    case "Python":
      return "#417a9a80"
    case "JavaScript":
      return "#aa792880"
    case "HTML":
      return "#ff703380"
    case "CSS":
      return "#5c458880"
    case "Java":
      return "#9f383880"
    case "Jupyter Notebook":
      return "#0c192380"
    case "C++":
      return "#6e49e180"
    case "TypeScript":
      return "#3f939a"
    default:
      return "rgba(0, 0, 0, 0.08)"
  }
}

export function GithubCard(props) {

  console.log(props.topics);
  
  return (
    <Card sx={{
      width: '70%',
      background: '#353535',
      m: 2,
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <Typography variant="h5" component="div">
            {formatText(props.name)}
          </Typography>
          <Chip
            sx={{ fontSize: 12, color: 'inherit', backgroundColor: formatLanguage(props.language) }}
            label={props.language}
          />
        </div>
        <Typography sx={{ fontSize: 12, marginBottom: '1rem' }} color="gray" >
          Created: {formatDate(props.createdAt)} | Updated: {formatDate(props.updatedAt)}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
          {props.description}
        </Typography>
        <Typography>
          {props.topics?.map((topic) => {
            return (
              <Chip sx={{ color: 'gray' }} label={topic} />
            )
          })}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button size="small" href={props.repoURL} sx={{ color: '#5f6d45' }}>
          See Source Code
        </Button>
        {props.homepage !== null && props.homepage !== "" ? (
          <Button size="small" href={props.homepage} sx={{ color: '#5f6d45' }}>
            Deployment
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );  
}
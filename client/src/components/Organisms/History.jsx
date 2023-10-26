import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Navbar, WorkHistoryCard } from '../Molecules';
import workHistory from '../../utils/workHistory.json' //ref for content

export function History() {
  return (
    <>
    <Navbar />
    <Timeline position="alternate">
    {workHistory.map((item) => (
        <TimelineItem key={item.id}>
            <TimelineOppositeContent color="gray">
            {item.dates}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <WorkHistoryCard
                company={item.company}
                title={item.title}
                description={item.description}
                supervisor={item.supervisor}
            />
            </TimelineContent>
        </TimelineItem>
    ))}
    </Timeline>
    </>
  );
}
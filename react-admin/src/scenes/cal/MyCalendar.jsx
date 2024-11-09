import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
  } from "@mui/material";

const localizer = dayjsLocalizer(dayjs)

const myEventsList = [
    {
        title: "All Day Event very long title",
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1)
    },
    {
        title: "Long Event",
        start: new Date(2023, 3, 7),
        end: new Date(2023, 3, 10)
    },

    {
        title: "DTS STARTS",
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0)
    },
    {
        title: "DTS ENDS",
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0)
    },
    {
        title: "Some Event",
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 9, 0, 0, 0)
    },
    {
        title: "Conference",
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: "Big conference for important people"
    },
    {
        title: "Meeting",
        start: new Date(2023, 6, 12, 10, 30, 0, 0),
        end: new Date(2023, 6, 12, 12, 30, 0, 0),
        desc: "Pre-meeting meeting, to prepare for the meeting"
    },
    {
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3))
    }
];

const MyCalendar = (props) => (
  <Box
    m='20px'
    >
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </Box>
)
export default MyCalendar;

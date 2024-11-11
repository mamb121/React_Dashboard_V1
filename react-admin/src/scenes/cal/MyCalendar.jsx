import React, {Component} from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Header from "../../components/Header";
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
  import { useMemo } from "react";

const localizer = dayjsLocalizer(dayjs)

const myEventsList = [
    {
        title: "All Day Event very long title",
        start: new Date(new Date().setHours(new Date().getHours() - 2)),
        end: new Date(new Date().setHours(new Date().getHours() - 1)),
    },
    {
        title: "Long Event",
        start: new Date(new Date().setHours(new Date().getHours() - 90)),
        end: new Date(new Date().setHours(new Date().getHours() - 89)),
    },

    {
        title: "DTS STARTS",
        start: new Date(new Date().setHours(new Date().getHours() - 45)),
        end: new Date(new Date().setHours(new Date().getHours() - 44)),
    },
    {
        title: "DTS ENDS",
        start: new Date(new Date().setHours(new Date().getHours() - 60)),
        end: new Date(new Date().setHours(new Date().getHours() - 58)),
    },
    {
        title: "Conference",
        start: new Date(new Date().setHours(new Date().getHours() - 24)),
        end: new Date(new Date().setHours(new Date().getHours() - 23)),
        desc: "Big conference for important people"
    },
    {
        title: "Meeting",
        start: new Date(new Date().setHours(new Date().getHours()-1)),
        end: new Date(new Date().setHours(new Date().getHours() +1)),
        desc: "Pre-meeting meeting, to prepare for the meeting"
    },
    {
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3))
    },
    {
        title: "Meeting a",
        start: new Date(new Date().setHours(new Date().getHours()+24)),
        end: new Date(new Date().setHours(new Date().getHours() +25)),
        desc: "important meeting"
    },
    {
        title: "Meeting b",
        start: new Date(new Date().setHours(new Date().getHours() +48)),
        end: new Date(new Date().setHours(new Date().getHours() +49)),
        desc: "test new meeting"
    },
];

const MyCalendar = (props) => (
  <Box
    m='20px'
    >
        <Header title="Calendar" subtitle="Calendar Page" />
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      defaultDate={new Date()}
      defaultView="month"
    />
  </Box>
)
export default MyCalendar;

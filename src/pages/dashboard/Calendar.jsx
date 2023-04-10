import { useEffect, useState } from "react";
import React from "react";
import { Calendar, momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import moment from 'moment';
import styled from "styled-components";

import Layout from "../../components/Layout/Layout";
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import Input from "../../Components/fields/InputField";
import Box from "../../components/Layout/Box";

// Local date handler
const localizer = momentLocalizer(moment);

const events = [
    {
        title: 'project 1',
        start: new Date (2023, 3, 6),
        end: new Date (2023, 3, 10),
    },
    {
        title: 'project 2',
        start: new Date (2023, 3, 10),
        end: new Date (2023, 3, 15)
    },
    {
        title: 'project 3',
        start: new Date (2023, 3, 20),
        end: new Date (2023, 3, 29)
    }
];
const Kalender = () => {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent])
    };

    return(
        <Layout title="Kalender">
            <SubHeader> 
                <Box color="primary">
                    <h2>Nieuw</h2>
                    <div>
                        <Input type="text" placeholder="Voeg titel toe" style={{width: "20%", marginRight: "10px"}} value={newEvent.title} onChange= {(e) => setNewEvent({...newEvent, title: e.target.value})} />

                        <DatePicker placeholderText="Begindatum" style={{marginRight: "10px"}} selected={newEvent.start} onChange={(start)=> setNewEvent({...newEvent, start})} />
                        <DatePicker placeholderText="Einddatum" selected={newEvent.end} onChange={(end)=> setNewEvent({...newEvent, end})} />
                        <Button color="secondary" style={{marginTop: "10px"}} onClick={handleAddEvent}>Nieuw</Button>
                    </div>
                    <Calendar 
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{margin: '20px', height: 500 }}
                    />
                </Box>
            </SubHeader>
        </Layout>
    );
};

export default Kalender;
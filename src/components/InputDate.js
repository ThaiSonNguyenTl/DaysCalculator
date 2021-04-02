import React, {  Component, useState } from 'react'
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function InputDate() {
    const [fromDate, setSelectedFromDate] = useState(null)
    const [toDate, setSelectedToDate] = useState(null)
    const [countDay, setCountDay] = useState(0);
    const countDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))
    return (
        <React.Fragment>
            <h1>From Date</h1>
            <DatePicker
                selected={fromDate}
                onChange={date => setSelectedFromDate(date)}
                dateFormat='dd/MM/yyyy'
            />
            <h1>To Date</h1>
            <DatePicker
                selected={toDate}
                onChange={date => setSelectedToDate(date)}
                dateFormat='dd/MM/yyyy'
            /> <br/> <br/>
            <Button variant="warning" onClick={() => setCountDay(countDays(fromDate, toDate))}>Calculate Duration</Button>
            <h1>Result: { countDay} days</h1>
        </React.Fragment>
    )
}
export default InputDate


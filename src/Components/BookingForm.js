import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

function BookingForm( {availableTimes, dispatch, onSubmit, onDateChange }) {
    const navegate = useNavigate();
    
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(true);

    const [time, setTime] = useState('');
    const [timeError, setTimeError] = useState(true);

    const [guests, setGuests] = useState('');
    const [guestsError, setGuestsError] = useState('');

    const [occasion, setOccasion] = useState('');
    const [occasionError, setOccasionError] = useState(true);

    function handleDateChange(e) {
        const date = e.target.value;
        setDate(date);
        if(!date || date === 'dd/mm/yyyy') {
            setDateError('Please select a valid date');
        } else {
            setDateError ('');
        }
    }

    function handleTimeChange(e) {
        const time = e.target.value;
        setTime(time);
        if(!time || time === 'select an available time') {
            setTimeError('Please select a valid time');
        } else {
            setTimeError ('');
        }
    }

    function handleGuestsChange(e) {
        const guests = e.target.value;
        setGuests(guests);
        if(!e.target.value) {
            setGuestsError('Number of guests is required');
        } else {
            setGuestsError ('');
        }
    }

    function handleOccasionChange(e) {
        const occasion = e.target.value;
        setOccasion(occasion);
        if(!occasion || occasion === 'select an occasion') {
            setOccasionError('Please select an occasion');
        } else {
            setOccasionError ('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleDateChange({target: {value: date}});
        handleTimeChange({target: {value: time}});
        handleGuestsChange({target: {value: guests}});
        handleOccasionChange({target: {value: occasion}});
    
        if(!dateError && !timeError && !guestsError && !occasionError) {
            navegate('/booking-confirmed');
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} 
                onChange={handleDateChange} aria-label="Date" />
                {dateError && <div>{dateError}</div>}

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} 
                onChange={handleTimeChange} aria-label="Time" >
                    <option value=''>select an available time</option>
                    {availableTimes.map(time => (
                        <option key={time} >{time}</option>
                    ))}
                </select>
                {timeError && <div>{timeError}</div>}

                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" 
                placeholder="1" min='1' max='20' 
                value={guests} onChange={handleGuestsChange} aria-label="Guests" />
                {guestsError && <div>{guestsError}</div>}
                
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} 
                onChange={handleOccasionChange} aria-label="Occasion" >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                {occasionError && <div>{occasionError}</div>}

                <button type="submit" 
                disabled={!date && !time && !guests && !occasion}
                aria-label="Submit Reservation"
                >Make your reservation</button>
            </form>
        </div>
    )
}

export default BookingForm;
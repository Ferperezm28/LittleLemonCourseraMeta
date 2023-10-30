import React, {useReducer, useEffect, useState} from "react";
import BookingForm from "./BookingForm";
import BookingHero from "./BookingHero";
import { useNavigate } from "react-router-dom";

const initialState = {
    availableTimes: [],
    error: null,
}

function updateTimes(state, action) {
    switch(action.type) {
        case 'FETCH_SUCESS':
            return {...state, availableTimes: action.payload, error: null };
        case 'FETCH_ERROR':
            return {...state, availableTimes: [], error: 'Error fetching times'}
        default:
            return state;
        }
}

function BookingPage() {
    const [data, setData] = useState(new Date().toISOString().split('T')[0]);

    const [state, dispatch] = useReducer(updateTimes, initialState);

    useEffect(() => {
        async function getAvailablesTimes() {
            try {
                const times = window.api.fetchAPI(data);
                dispatch({ type: 'FETCH_SUCCESS', payload: times });
            } catch (error) {
                console.error(error);
                dispatch({ type: 'FETCH_ERROR' });
            }
        }
        getAvailablesTimes();
    }, [data]);

    const navegate = useNavigate();

    const submitForm = async (formData) => {
        const response = window.api.submitAPI(formData);

        if(response) {
            navegate('/booking-confirmed');
        }
    };

    return(
        <main>
            {state.error && <p>{state.error}</p>}
            <BookingHero />
            <BookingForm availableTimes={state.availableTimes} 
            dispatch={dispatch} onSubmit={submitForm} onDateChange={setData} />
        </main>
    )
}

export default BookingPage;
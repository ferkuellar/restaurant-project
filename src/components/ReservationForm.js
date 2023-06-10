import React, { useState } from 'react';
import { db } from '../firebase';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Guardar la reserva en Firebase
        db.collection('reservations')
        .add({
            name,
            date,
            time,
        })
        .then(() => {
            // Limpia los campos del formulario después de guardar la reserva
            setName('');
            setDate('');
            setTime('');
            console.log('Reserva guardada en Firebase.');
        })
        .catch((error) => {
            console.error('Error al guardar la reserva:', error);
        });
    };

    return (
        <div>
        <h2>Formulario de reserva de mesa</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
            Fecha:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <br />
            <label>
            Hora:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Reservar mesa</button>
        </form>
        </div>
    );
};

export default ReservationForm;

import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ReservationList = () => {
const [reservations, setReservations] = useState([]);

useEffect(() => {
        const unsubscribe = db.collection('reservations').onSnapshot((snapshot) => {
        const reservationsData = [];
        snapshot.forEach((doc) => {
            reservationsData.push({ id: doc.id, ...doc.data() });
        });
        setReservations(reservationsData);
        });

        return () => {
        unsubscribe();
        };
    }, []);

    const handleDelete = (id) => {
        db.collection('reservations')
        .doc(id)
        .delete()
        .then(() => {
            console.log('Reserva eliminada de Firebase.');
        })
        .catch((error) => {
            console.error('Error al eliminar la reserva:', error);
        });
    };

    return (
        <div>
        <h2>Lista de reservas</h2>
        {reservations.map((reservation) => (
            <div key={reservation.id}>
            <p>Nombre: {reservation.name}</p>
            <p>Fecha: {reservation.date}</p>
            <p>Hora: {reservation.time}</p>
            <button onClick={() => handleDelete(reservation.id)}>Eliminar</button>
            <hr />
            </div>
        ))}
        </div>
    );
};

export default ReservationList;
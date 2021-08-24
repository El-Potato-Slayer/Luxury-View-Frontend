import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Mansion() {
  const { id } = useParams();
  const [mansion, setMansion] = useState({});
  const [rooms, setRooms] = useState([]);
  const [err, setErr] = useState('');
  useEffect(() => {
    axios.get(`properties/${id}`)
      .then((res) => {
        setMansion(res.data);
        setRooms(res.data.rooms);
      })
      .catch(() => {
        setErr('Mansion information could not be fetched');
      });
  }, []);
  return (
    <>
      <p>{err}</p>
      <div>
        <div>
          <img src={mansion.picture} alt="mansion" />
        </div>
        <div>
          <h3>{mansion.name}</h3>
          {rooms.map((room) => (
            <div key={room.id}>
              <p>{room.name}</p>
              <p>{room.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <p>Want to see it in-person</p>
      <Link to="/appointment/create">Book an appointment</Link>
    </>
  );
}

export default Mansion;

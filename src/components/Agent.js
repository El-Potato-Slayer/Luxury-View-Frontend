import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Agent() {
  const { id } = useParams();
  const [agent, setAgent] = useState({});
  const [err, setErr] = useState('');
  useEffect(() => {
    axios.get(`agents/${id}`)
      .then((res) => {
        setAgent(res.data);
      })
      .catch(() => {
        setErr('Agent information could not be fetched');
      });
  }, []);

  function displayError(error) {
    if (error !== '') {
      return <p>{error}</p>;
    }
    return null;
  }

  return (
    <>
      {displayError(err)}
      {agent.first_name}
    </>
  );
}

export default Agent;

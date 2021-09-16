import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Agent() {
  const { id } = useParams();
  const [agent, setAgent] = useState({});
  const [err, setErr] = useState('');

  function fetchAgent(id) {
    axios.get(`agents/${id}`)
      .then((res) => {
        setAgent(res.data);
      })
      .catch(() => {
        setErr('Agent information could not be fetched');
      });
  }

  function displayError(error) {
    if (error !== '') {
      return <p>{error}</p>;
    }
    return null;
  }

  function displayAgent(error, agent) {
    if (!error) {
      return (
        <>
          <div className="agent-picture-wrapper">
            <img className="agent-picture" src={agent.picture} alt="" />
          </div>
          <div className="agent-details">
            <p className="page-title">
              {agent.first_name}
              {' '}
              {agent.last_name}
            </p>
            <p>
              <a href={`mailto:${agent.email}`} className="text-info">
                {agent.email}
              </a>
            </p>
            <p>
              <a href={`tel:${agent.number}`} className="text-info">
                {agent.number}
              </a>
            </p>
          </div>
        </>
      );
    }
    return null;
  }

  useEffect(() => {
    fetchAgent(id);
  }, []);

  return (
    <>
      {displayError(err)}
      {displayAgent(err, agent)}
    </>
  );
}

export default Agent;

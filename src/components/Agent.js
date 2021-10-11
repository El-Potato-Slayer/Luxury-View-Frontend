import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Agent() {
  const { id } = useParams();
  const { data: agent, error: err } = useFetch(`agents/${id}`, 'Agent');

  function displayError(error) {
    if (error !== '') {
      return <p>{error}</p>;
    }
    return null;
  }

  function displayAgent(error, agent) {
    if (!error && agent) {
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

  return (
    <>
      {displayError(err)}
      {displayAgent(err, agent)}
    </>
  );
}

export default Agent;

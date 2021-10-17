import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AgentsList() {
  const { agents } = useSelector((state) => state.agentsReducer);

  function displayAgent(agent) {
    return (
      <div>
        <div
          className="listing-image"
          style={{ background: `url(${agent.picture}) center / cover` }}
        />
        <div className="info">
          <p className="listing-important">
            {agent.first_name}
            {' '}
            {agent.last_name}
          </p>
          <p>
            Number:
            {' '}
            {agent.number}
          </p>
          <p>
            Email:
            {' '}
            {agent.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="agents" className="page">
      <h2 className="page-title">Agents</h2>
      <div data-testid="agents-listing" className="listings">
        {agents.map((agent) => (
          <Link key={agent.id} to={`agents/${agent.id}`}>
            {displayAgent(agent)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AgentsList;

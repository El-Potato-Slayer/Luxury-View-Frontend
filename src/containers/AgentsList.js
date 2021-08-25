import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

function AgentsList({ agents }) {
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
    <div className="page">
      <h2 data-testid="agents" className="page-title">Agents</h2>
      <div data-testid="agents-listing" className="listings">
        {agents.map((agent) => (
          <div key={agent.id}>
            {displayAgent(agent)}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  agents: state.agentsReducer.agents,
});

AgentsList.propTypes = {
  agents: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(AgentsList);

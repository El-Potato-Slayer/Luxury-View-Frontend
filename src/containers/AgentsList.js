import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AgentsList({ agents }) {
  return (
    <>
      <h2 data-testid="agents">Agents</h2>
      <div data-testid="agents-listing">
        {agents.map((agent) => (
          <p key={agent.id}>{agent.first_name}</p>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  agents: state.agentsReducer.agents,
});

AgentsList.propTypes = {
  agents: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(AgentsList);

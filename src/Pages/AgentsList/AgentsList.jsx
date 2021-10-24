import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SkeletonListAgent from '../../Skeletons/SkeletonListAgent/SkeletonListAgent';
import displayAgent from './helper';

function AgentsList() {
  const { agents, loading } = useSelector((state) => state.agentsReducer);

  return (
    <div data-testid="agents" className="page">
      <h2 className="page-title">Agents</h2>
      <div data-testid="agents-listing" className="listings">
        {loading && (
          <>
            <SkeletonListAgent />
            <SkeletonListAgent />
            <SkeletonListAgent />
          </>
        )}
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

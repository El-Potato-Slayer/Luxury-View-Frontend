export default function displayAgent(agent) {
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

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AgentContactForm({ agent, name, email }) {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  console.log(inputName);

  return (
    <form className="agent-contact-form">
      <section className="agent-contact-form__agent-details">
        <img src={agent.picture} className="agent-contact-form__agent-picture" alt="agent" />
        <div className="agent-contact-form__agent-details__main">
          <Link to={`/agents/${agent.id}`}>
            {agent.first_name}
            {' '}
            {agent.last_name}
          </Link>
          <a href={`tel:${agent.number}`}>{agent.number}</a>
        </div>
      </section>
      <section className="agent-contact-form__inputs">
        {!isMessageSent && (
        <>
          <input
            type="text"
            placeholder="Name"
            required
            className="agent-contact-form__input"
            value={inputName}
            onChange={(e) => { setInputName(e.target.value); }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="agent-contact-form__input"
            value={inputEmail}
            onChange={(e) => { setInputEmail(e.target.value); }}
          />
          <textarea placeholder="Message" required className="agent-contact-form__input" />
          <button type="submit" className="button info" onClick={() => setIsMessageSent(true)}>Send Message</button>
        </>
        )}
        {isMessageSent && (
        <span>
          Message sent.
          {' '}
          {agent.name}
          {' '}
          will get back to you soon.
        </span>
        )}
      </section>
    </form>
  );
}

AgentContactForm.propTypes = {
  agent: PropTypes.objectOf(PropTypes.shape()).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AgentContactForm;

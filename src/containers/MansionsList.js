import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function MansionsList({ mansions }) {
  return (
    <div>
      {mansions.map((mansion) => (
        <p key={mansion.id}>{mansion.name}</p>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  mansions: state.propertiesReducer.bodies,
});

MansionsList.propTypes = {
  mansions: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(MansionsList);

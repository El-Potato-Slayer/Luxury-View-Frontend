import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function MansionsList({ mansions }) {
  return (
    <>
      <h2 data-testid="mansions">Mansions</h2>
      <div data-testid="mansions-listing">
        {mansions.map((mansion) => (
          <p key={mansion.id}>{mansion.name}</p>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  mansions: state.propertiesReducer.properties,
});

MansionsList.propTypes = {
  mansions: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(MansionsList);

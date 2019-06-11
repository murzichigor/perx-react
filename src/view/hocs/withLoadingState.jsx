import { connect } from 'react-redux';
import { combinedLoading } from '../../state/selectors';

const withLoadingState = (WrappedComponent) => {
  const mapStateToProps = state => ({
    loading: combinedLoading(state),
  });

  return connect(mapStateToProps)(WrappedComponent);
};

export default withLoadingState;

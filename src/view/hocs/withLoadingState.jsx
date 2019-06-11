import { connect } from 'react-redux';

const withLoadingState = selector => (WrappedComponent) => {
  const mapStateToProps = state => ({
    loading: selector(state),
  });

  return connect(mapStateToProps)(WrappedComponent);
};

export default withLoadingState;

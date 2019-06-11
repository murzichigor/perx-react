import { connect } from 'react-redux';
import { uiSelectors } from '../../state/ui';

const withErrorMessage = (WrappedComponent) => {
  const mapStateToProps = state => ({
    errorMessage: uiSelectors.getErrorMessage(state),
  });

  return connect(mapStateToProps)(WrappedComponent);
};

export default withErrorMessage;

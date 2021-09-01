import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import withSpinner from '../withSpinner';
import { selectIsCollectionFetching } from '../../Redux/shop/shop.selector';
import CollectionsOverview from '.';

const mapStateToProps  = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewsContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview)

export default CollectionsOverviewsContainer
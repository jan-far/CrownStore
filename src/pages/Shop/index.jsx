import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionStart } from '../../Redux/shop/shop.action';

import CollectionsOverviewsContainer from '../../Components/CollectionsOverview/collectionsOverviewContainer';
import CollectionPagesContainer from '../Collection/collectionContainer';

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewsContainer}
      />
      <Route
        path={`${match.path}/:CollectionId`}
        component={CollectionPagesContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

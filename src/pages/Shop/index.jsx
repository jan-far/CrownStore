import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../Components/CollectionsOverview';
import CollectionPage from '../Collection';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:CollectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview';
import {selectCollectionsForPreview } from '../../Redux/shop/shop.selector';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collection-preview">
    {collections.map(({ id, ...otherCollections }) => (
      <CollectionPreview key={id} {...otherCollections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

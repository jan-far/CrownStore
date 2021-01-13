import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';

import { CollectionsOverviewContainer } from './collectionOverviewElements';

const CollectionsOverview = (props) => {
  const { collections } = props
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} {...props} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

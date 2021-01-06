import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../Components/CollectionItem';
import { selectCollection } from '../../Redux/shop/shop.selector';
import './collection.styles.scss';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collectionElements';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.CollectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

import React from 'react';
import CollectionItem from '../CollectionItem';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collectionPreviewElements';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;

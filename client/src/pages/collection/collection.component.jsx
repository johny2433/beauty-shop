  
import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles'

const CollectionPage = ({ collection }) => {

  // How to use the CleanUp function
  // useEffect(() => {
  //   console.log('I am subscribing')
  //   const unsubscribeFromCollections = firestore
  //     .collection('collection')
  //     .onSnapshot(snapshot => console.log(snapshot))
  //   //cleanup function
  //   return () => {
  //     console.log('I am unsubscribing')
  //     unsubscribeFromCollections()
  //   }
  // }, [])

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
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage)
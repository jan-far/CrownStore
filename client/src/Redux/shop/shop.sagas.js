import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../Components/firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';
import { shopActionTypes } from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    // we use yield here to get the collectionRef data, as a promise similar to the case of aync await.
    const snapshot = yield collectionRef.get();

    // saga's CALL function takes in a function as the 1st param and the params to that function as its 2nd paramater
    // call(func, a)  ==> func(a)
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    // saga's PUT is used as dispatch in redux
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}

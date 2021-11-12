import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'

import artistReducer from './artist'
import albumReducer from'./album'
import songReducer from './songs'
import playlistReducer from './playlists';
import queueReducer from './musicQueue';

import playlistSongsReducer from './playlists_songs';

import reviewReducer from'./review'
import playerReducer from './musicPlayer';



const rootReducer = combineReducers({
  session,
  artist:artistReducer,
  album: albumReducer,
  playlists: playlistReducer,
  songs: songReducer,
  musicQueue: queueReducer,
  playlist_songs: playlistSongsReducer,
  review: reviewReducer,
  player: playerReducer

})
  
let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

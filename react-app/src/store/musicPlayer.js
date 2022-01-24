const START = "player/start";
const STOP = "player/stop";

export const startSong = () => ({
  type: START,
  isPlaying: true,
});

export const stopSong = () => ({
  type: STOP,
  isPlaying: false,
});

const initialState = {
  isPlaying: false,
};

export const play = () => async (dispatch) => {
  return true;
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return action.isPlaying;
    case STOP:
      return action.isPlaying;
    default:
      return state;
  }
}

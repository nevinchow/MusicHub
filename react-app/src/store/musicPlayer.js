const START = 'player/start'

export const startSong = () => ({
    type: START,
    isPlaying: true
})

const initialState = {
    'isPlaying': false
};

export const play = () => async (dispatch) => {
    return true
}

export default function playerReducer(state = initialState, action) {
        switch (action.type) {
            case START:
                return action.isPlaying
            default:
                return state;
        }
        

}

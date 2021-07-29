export const NAP = 'nap';
export const EAT = 'eat';
export const PLAY = 'play';

export const actionNap = () => async (dispatch) => {
  dispatch({
    type: NAP,
  });
};

export const actionEat = () => async (dispatch) => {
  dispatch({
    type: EAT,
  });
};

export const actionPlay = () => async (dispatch) => {
  dispatch({
    type: PLAY,
  });
};

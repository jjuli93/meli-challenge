export interface GlobalState {
  data: any;
}

export const INITIAL_STATE: GlobalState = {
  data: null
};

enum ActionTypes {
  SET_DATA = 'SET_DATA'
}

interface SetData {
  type: ActionTypes.SET_DATA;
  payload: any;
}

export type Action = SetData;

export const actionCreators = {
  setUser: (data: any): SetData => ({ type: ActionTypes.SET_DATA, payload: data })
};

export const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case ActionTypes.SET_DATA: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

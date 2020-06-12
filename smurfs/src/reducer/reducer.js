import {
  FETCH_SMURF,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from "../action/action";

export const initialState = {
  smurf: [],
  fetchingSmurf: false,
  //addingSmurf: false,
  error: "",
  id: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        fetchingSmurf: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        fetchingSmurf: false,
        error: ""
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurf: false,
        error: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        smurf: [...state.smurf],
        fetchingSmurf: true,
        error: "",
        id: ""
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        fetchingSmurf: false,
        error: "",
        //age: action.payload,
        //height: action.payload,
        id: Date.now()
      };

    case POST_SMURF_FAIL:
      return {
        ...state,
        //addingSmurf: false,
        error: action.payload,
        fetchingSmurf: false
      };
    default:
      return state;
  }
};

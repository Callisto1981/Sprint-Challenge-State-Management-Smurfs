import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: err.res });
    });
};

export const postSmurf = newSmurf => dispatch => {
  dispatch({ type: POST_SMURF });
  axios
    .post(`http:localhost:3333/smurfs`, newSmurf)
    .then(res => {
      dispatch({ tpe: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_SMURF_FAIL, payload: err.response });
    });
};

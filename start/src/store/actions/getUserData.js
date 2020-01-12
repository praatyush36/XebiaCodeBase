import * as types from '../actions/actionTypes';


export function getUserDataTypes() {
  return {type: types.GET_USER_DATA};
}

export function getUserDataOnSuccess(userdata) {
  return {
    type: types.GET_USER_DATA_SUCCESS,
    payload: userdata
  };
}

export function getUserDataOnFailure(error) {
  return {
    type: types.GET_USER_DATA_FAILURE,
    payload: error
  };
}

export function getUserData(url) {
  return function (dispatch) {
    dispatch(getUserDataTypes());
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
          }
        })
      .then((findresponse) => {
         dispatch(getUserDataOnSuccess(findresponse));
      })
      .catch((error) => {
        dispatch(getUserDataOnFailure(error));
        return error;
    });
  };
}




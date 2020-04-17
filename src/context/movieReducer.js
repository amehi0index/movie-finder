import {
  SEARCH_MOVIES, OPEN_POPUP, CLOSE_POPUP, SET_LOADING,SET_SEARCH
} from './types';

export default (state, action)=> {
  switch(action.type){
      case SEARCH_MOVIES: 
          return {
              ...state,
              movies: action.payload,
              loading: false
          };
      case OPEN_POPUP: 
          return {
            ...state,
              selected: action.payload,
              loading: false
          };
     case CLOSE_POPUP: 
          return {
              ...state,
             // selected: {},
              loading: false
          };
   
    case SET_LOADING: 
          return {
              ...state,
              loading: true
          };

   /* case SET_SEARCH: 
          return {
              ...state,
              search: action.payload,
              loading: true
          };*/

      default:
          return state;
  }
}
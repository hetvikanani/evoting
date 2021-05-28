import { appActions } from "./action";

const initialState = {
  entityDetails: [],
  memberDetails: [],
  scrutinizerDetails: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.SET_ENTITY_DATA: {
      return {
        ...state,
        entityDetails: [...state.entityDetails, action.payload],
      };
    }
    case appActions.SET_MEMBER_DATA: {
      return {
        ...state,
        memberDetails: [...state.memberDetails, action.payload],
      };
    }
    case appActions.SET_SCRUTINIZER_DATA: {
      return {
        ...state,
        scrutinizerDetails: [...state.scrutinizerDetails, action.payload],
      };
    }
    default:
      return initialState;
  }
};

export default AppReducer;

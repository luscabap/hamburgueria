import CarrinhoActionTypes from "./action-types";

const initialState = {
  produtos: [],
}

const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CarrinhoActionTypes.ADD_PRODUTO:
      return { ...state, produtos: [state.produtos, action.payload] }
    default:
      return state;
  }
}

export default carrinhoReducer;
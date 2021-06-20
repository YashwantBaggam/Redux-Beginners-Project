import { ActionTypes } from "../Constants/ActionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Yashwant",
      category: "programmer"
    }
  ]
};
// export const ProductReducer = (state, action) => {
//   switch (action.type) {
// we ca use the above way or do destructturing as shown below:

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

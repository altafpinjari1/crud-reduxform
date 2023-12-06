// reducers.js
const initialState = {
  formData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FORM_DATA':
      return {
        ...state,
        formData: [...state.formData, { ...action.payload, id: Date.now() }],
      };
    case 'DELETE_FORM_DATA':
      return {
        ...state,
        formData: state.formData.filter((data) => data.id !== action.payload),
      };
    case 'EDIT_DATA':
      const { id, updatedData } = action.payload;
      return {
        ...state,
        formData: state.formData.map((data) =>
          data.id === id ? { ...data, ...updatedData } : data
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;

  export const addFormData = (data) => ({
    type: 'ADD_FORM_DATA',
    payload: data,
  });
  
  export const deleteFormData = (id) => ({
    type: 'DELETE_FORM_DATA',
    payload: id,
  });
  
  export const editData = (id, updatedData) => ({
    type: 'EDIT_DATA',
    payload: { id, updatedData },
  });
  
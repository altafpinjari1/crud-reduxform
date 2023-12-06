// AddDataForm.js
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addFormData, editData } from '../redux/Action';
import { useHistory, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../style/add.css';

const AddDataForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const formData = useSelector((state) => state.formData);

  const [isEdit, setIsEdit] = useState(false);
  const [initialData, setInitialData] = useState({
    title: '',
    description: '',
    price: '',
    status: '',
  });

  useEffect(() => {
    if (id) {
      const existingData = formData.find((data) => data.id === parseInt(id));
      if (existingData) {
        setInitialData(existingData);
        setIsEdit(true);
      }
    }
  }, [id, formData]);

  const onSubmit = (data) => {
    if (isEdit) {
      dispatch(editData(parseInt(id), data));
    } else {
      dispatch(addFormData(data));
    }
    reset();
    history.push('/');
  };

  return (
    <>
      <Sidebar />
      <div className="form-div">
        <h1>{isEdit ? 'Edit Task' : 'Add Task'}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Task title:</label>
          <input
            {...register('title', { required: true })}
            placeholder="Task title"
            defaultValue={initialData.title}
          />
          <span>Task title</span>

          <label htmlFor="description">Description:</label>
          <input
            {...register('description', { required: true })}
            placeholder="Description"
            defaultValue={initialData.description}
          />
          <span>Description</span>

          <label htmlFor="price">Price:</label>
          <input
            {...register('price', { required: true, pattern: /^\d+$/ })}
            placeholder="Price"
            defaultValue={initialData.price}
          />
          <span>Price</span>

          <label htmlFor="status">Status:</label>
          <select
            {...register('status', { required: true })}
            placeholder="Status"
            defaultValue={initialData.status}
          >
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <span>Status</span>

          <button className="sub-btn" type="submit">
            {isEdit ? 'Update' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddDataForm;

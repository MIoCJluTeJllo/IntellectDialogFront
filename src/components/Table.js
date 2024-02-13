import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, removeData, updateData } from "../store/store";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "./table.css";

const Table = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    agreementChecked: false,
    selectedDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(updateData({ id: formData.id, newData: formData }));
    } else {
      dispatch(addData({ ...formData, id: Date.now() }));
    }
    setFormData({
      id: "",
      name: "",
      phone: "",
      agreementChecked: false,
      selectedDate: "",
    });
  };

  const handleEdit = (id) => {
    const editedData = data.find((item) => item.id === id);
    setFormData(editedData);
  };

  const handleDelete = (id) => {
    dispatch(removeData(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-table">
        <input type="hidden" name="id" value={formData.id} />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="E-mail"
        />
        <input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
        />
        <label>
          I agree to the terms and conditions
          <input
            type="checkbox"
            name="agreementChecked"
            checked={formData.agreementChecked}
            onChange={handleInputChange}
          />
        </label>
        <input
          type="date"
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleInputChange}
        />
        <button type="submit">{formData.id ? "Update" : "Add"}</button>
      </form>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Agreement</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="block">
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.agreementChecked ? "Yes" : "No"}</td>
              <td>{item.selectedDate}</td>
              <td className="btns">
                <button onClick={() => handleEdit(item.id)}>
                  <MdModeEdit />
                </button>
                <button onClick={() => handleDelete(item.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

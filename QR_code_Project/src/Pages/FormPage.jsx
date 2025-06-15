import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid'; 
import { saveForm } from '../Utils/Storage'; 

export default function FormPage() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
  });

  const navigate = useNavigate(); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    const id = uuidv4(); 
    saveForm(id, form); 
    navigate(`/confirm/${id}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Fill the Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border p-2 rounded"
          required
        />


        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your age"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ✅ Submit
        </button>
      </form>
    </div>
  );
}

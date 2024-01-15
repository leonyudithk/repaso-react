import { Input, Select } from "antd";
import React from "react";
import useForm from "../Hooks/useForm";

const Add = () => {
  const [dataForm, handleOnChange, handleOnChangeSelect] = useForm({
    title: "",
    year: "",
    description: "",
    poster: "",
    type: "",
    value: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Estamos en el Submit", dataForm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          onChange={handleOnChange}
          value={dataForm.title}
          placeholder="Title"
        />
        <Input
          name="year"
          onChange={handleOnChange}
          value={dataForm.year}
          placeholder="Year"
        />
        <Input
          name="description"
          onChange={handleOnChange}
          value={dataForm.description}
          placeholder="Description"
        />
        <Select
          name="type"
          defaultValue="Select"
          onChange={handleOnChangeSelect}
          options={[
            { value: "Movie", label: "Movie" },
            { value: "Serie", label: "Serie" },
            { value: "Documental", label: "Documentalas" },
            { value: "Infantil", label: "Infantil" },
            { value: "Adulto", label: "Adulto" },
          ]}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Add;

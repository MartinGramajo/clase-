import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { guardarEnLocalStorage } from "../utils/localStorage";

export default function Admin({memes, setMemes}) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({ titulo: "", imagen: "" });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const form = event.currentTarget;

    // Chequea que los campos del formulario sean validos.
    if (form.checkValidity() === true) {
      // Forma incorrecta de actualizar un array, mutando un objeto
      // memes.push(input); // esto no hace un nuevo render del component.

      //Forma correcta en react, crear un nuevo array, copiando los elementos previos.
      const nuevoArray = [...memes, input];
      setMemes(nuevoArray);

      // Actualizar LocalStorage con la function que traemos de utils
      guardarEnLocalStorage({ key: "memes", value: nuevoArray });

      // Forma simplificada
      // setMemes([...memes, input]);
      form.reset();
      setValidated(false);
    }
  };

  const handleChange = (e) => {
    // Extraemos y guardamos en variables, el nombre y el valor del input
    // Otra forma de extraerlo
    // const inputHtml = e.target;
    // const name = inputHtml.name;
    // const value = inputHtml.value;

    const { value, name } = e.target;

    // Declaramos un objeto que contiene una copia de las propiedades del state
    // mas el dato nuevo ingresado usando el name y el value del elemento.
    const newInput = { ...input, [name]: value };
    //con ese elemento actualizamos el estado.
    setInput(newInput);
    //Forma simplificada
    //setInput({ ...input, [name]: value });
  };

  return (
    <div className="container p-5">
      <h2 className="mt-5  text-center">Formulario para crear momos</h2>
      <Form
        className="card p-5 m-auto mt-5 form-admin"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            required
            name="titulo"
            type="text"
            placeholder="Meme"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Por favor verifica tu comedia.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            required
            name="imagen"
            type="text"
            placeholder="http://example.com"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Comedia aceptada</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Tu comedia no es lo suficientemente prendida para esta App.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mx-auto" type="submit">
          Crear Meme
        </Button>
      </Form>
      <Table
        className="mx-auto mt-5"
        style={{ width: "600px" }}
        striped
        bordered
        hover
      >
        <tbody>
          {memes.length === 0
            ? " No hay memes guardados"
            : memes.map((meme, id) => (
                <tr key={id}>
                  <td>
                    <img
                      src={meme.imagen}
                      alt=""
                      style={{ width: "5rem" }}
                    ></img>
                  </td>
                  <td>{meme.titulo}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
}

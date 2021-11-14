import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function ImageInput() {
  const [imageInput, setImageInput] = useState("");

  const axios = require("axios");

  async function getImage(imageInput) {
    try {
      const response = await axios.get(imageInput);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="URL image"
          aria-label="URL image"
          area-aria-describedby="basic-addon2"
          onChange={(event) => setImageInput(event.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => getImage(imageInput)}
        >
          Rehost
        </Button>
      </InputGroup>
      <img src={imageInput} alt="Italian Trulli" />
    </>
  );
}

export default ImageInput;

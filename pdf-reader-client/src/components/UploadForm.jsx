import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PdfContext } from "../store/pdf-context";

const UploadForm = () => {
  const { selectedFile, setSelectedFile } = useContext(PdfContext);

  const navigate = useNavigate();

  // Function to handle file selection
  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert("Please select a PDF file.");
    }
  };

  // Function to handle form submission
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/doc-view");
  };
  return (
    <Form>
      <h1 className="mb-4">PDF Merger</h1>
      <input type="file" onChange={fileChangeHandler} accept=".pdf" />
      <Button type="submit" onClick={submitHandler}>
        Upload
      </Button>
    </Form>
  );
};

export default UploadForm;

import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const UploadForm = () => {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      // Reset the selected file and show an error message
      setSelectedFile(null);
      alert("Please select a PDF file.");
    }
  };

  // Function to handle form submission
  const submitHandler = (event) => {
    event.preventDefault()
    // Implement file upload logic here
    console.log("selected file", selectedFile);
  };
  return (
    <Form>
      <input type="file" onChange={fileChangeHandler} accept=".pdf" />
      <Button type="submit" onClick={submitHandler}>
        Upload
      </Button>
    </Form>
  );
};

export default UploadForm;

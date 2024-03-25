import { useState } from "react";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">PDF Merger</h1>
      <div>
        <UploadForm />
      </div>
    </div>
  );
}

export default App;

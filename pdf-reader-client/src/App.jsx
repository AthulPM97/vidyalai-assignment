import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadForm from "./components/UploadForm";
import { pdfjs } from "react-pdf";
import DocViewer from "./components/DocViewer";
import MergedViewer from "./components/MergedViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Router>
        <Routes>
          <Route exact path="/" element={<UploadForm />} />
          <Route exact path="/doc-view" element={<DocViewer />} />
          <Route exact path="/merged-view" element={<MergedViewer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

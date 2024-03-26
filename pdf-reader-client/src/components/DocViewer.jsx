import { useContext, useState } from "react";
import { Document, Page } from "react-pdf";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PdfContext } from "../store/pdf-context";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DocViewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumbers, setPageNumbers] = useState([]);
  const { selectedFile, selectedPages, setSelectedFile, setSelectedPages } =
    useContext(PdfContext);
  const navigate = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function pageSelectHandler(idx) {
    if (pageNumbers.includes(idx)) {
      setPageNumbers(pageNumbers.filter((x) => x !== idx));
    } else {
      setPageNumbers([...pageNumbers, idx]);
    }
  }

  function mergeHandler() {
    setSelectedPages(pageNumbers);
    navigate("/merged-view");
  }

  return (
    <div>
      <Button onClick={mergeHandler}>Merge Pages</Button>
      <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Row className="justify-content-center">
          {Array.from({ length: numPages }).map((_, idx) => (
            <Col key={idx} xs={6} md={3} className="mb-4">
              <Form.Check
                type="checkbox"
                label={`${idx + 1}`}
                onChange={pageSelectHandler.bind(null, idx)}
              />
              <Card style={{ width: "100%" }}>
                <Page
                  width={200}
                  key={1}
                  pageNumber={idx + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Document>
    </div>
  );
}
export default DocViewer;

import { useContext } from "react";
import { PdfContext } from "../store/pdf-context";
import { Document, Page } from "react-pdf";
import { usePDF } from "@react-pdf/renderer";

const MergedViewer = () => {
  const { selectedFile, selectedPages } = useContext(PdfContext);

  const MyDoc = () => (
    <Document file={selectedFile}>
      {selectedPages?.map((pageNo) => (
        <Page
          key={pageNo}
          pageNumber={pageNo + 1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      ))}
    </Document>
  );

  const [instance, updateInstance] = usePDF({ document: MyDoc });

  return (
    <div>
      <a href={instance.url} download="test.pdf">
        Download
      </a>
      <MyDoc />
    </div>
  );
};

export default MergedViewer;

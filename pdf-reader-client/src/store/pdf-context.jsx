import { useReducer } from "react";
import react from "react";

const defaultState = {
  selectedFile: null,
  selectedPages: null,
};

export const PdfContext = react.createContext(defaultState);

const pdfReducer = (state, action) => {
  if (action.type === "SET_FILE") {
    return {
      ...state,
      selectedFile: action.item,
    };
  }
  if (action.type === "SET_PAGES") {
    return {
      ...state,
      selectedPages: action.item,
    };
  }

  return defaultState;
};

const PdfProvider = (props) => {
  const [state, dispatchCartAction] = useReducer(pdfReducer, defaultState);

  const setSelectedFile = (item) => {
    dispatchCartAction({ type: "SET_FILE", item });
  };
  const setSelectedPages = (item) => {
    dispatchCartAction({ type: "SET_PAGES", item });
  };

  const pdfContext = {
    selectedFile: state.selectedFile,
    selectedPages: state.selectedPages,
    setSelectedFile,
    setSelectedPages,
  };

  return (
    <PdfContext.Provider value={pdfContext}>
      {props.children}
    </PdfContext.Provider>
  );
};

export default PdfProvider;

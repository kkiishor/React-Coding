import { useEffect } from "react";

export const useDocumentTitle = (titleText) => {
  useEffect(() => {
    document.title = `Bookshelf | ${titleText}`;
  }, [titleText]);
};

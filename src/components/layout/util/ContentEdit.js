import React from "react";
import img from "../../../sass/images/cv/5.jpg";

import useDataUriConverter from "../../hooks/global/useDataUriConvert";

const ContentEdit = () => {
  const { convertFileToBase64viaFileReader } = useDataUriConverter();
  let code = "";
  let x = JSON.stringify(code);

  convertFileToBase64viaFileReader(img, base64Img => {
    console.log(base64Img);
  });

  // console.log(content && content.images[0]);
  console.log(img);

  console.log(x);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.8rem",
        padding: "20rem 0"
      }}
    >
      <p contentEditable="true" suppressContentEditableWarning={true}>
        PASTE
      </p>
    </div>
  );
};

export default ContentEdit;

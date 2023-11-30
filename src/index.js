import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li><img alt="random" src={img + "?grayscale"}/></li>
      <li>
        <img
          className="food-img"
          src="https://www.seriouseats.com/thmb/pycjKJjFH3RhfbzeRzMpp2SIDZ0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__04__20150427-tacobell-cemitas-vicky-wasik-2-005279208bff4c1b9fe27106821d8448.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          className="food-img"
          src="https://www.seriouseats.com/thmb/3OazUqmhBDI6-D3QPIGpHb7aRQU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2012__06__20120610-stir-fry-grill-wok-26-147976538e3a407ba9974ed3ed9bf487.jpeg"
          alt=""
        />
      </li>
      <li>
        <img
          className="food-img"
          src="https://www.seriouseats.com/thmb/NFUdgfMIdrImmhrTcfEYPb63sqw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2012__12__20120730-chick-fil-a-food-lab-primary-5884dff6bd604a88817460f03bc22c47.jpeg"
          alt=""
        />
      </li>
    </ul>
  </div>,
  document.getElementById("root"),
);


/* eslint-disable react/prop-types */

// ProductsList page components

// Images
import ProductCell from "../components/ProductCell";
// import "./style.css";
import NameCell from "../components/NameCell";
import Productimage from "../components/ProductImage";
// Badges

const dataTableData = {
  columns: [
    
    { Header: "name", accessor: "name" ,padding:"40%", Cell: ({ value: name }) => (
      <NameCell name={name} />
    ),},
    { Header: "image", accessor: "image" ,padding:"40%", Cell: ({ value: image }) => (
      <Productimage image={image} />
    ),},
    { Header: "note", accessor: "note" },
    { Header: "description", accessor: "description" },
    { Header: "Category", accessor: "categoryName" },
    
    { Header: "Buy now", accessor: "link" , Cell: ({ value: link }) => (
      <ProductCell link={link} />
    ),},
  ],
};

export default dataTableData;

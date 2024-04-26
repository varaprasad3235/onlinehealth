import { useState } from "react";
import axios from "axios"; 

function Bookaappoint() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const handleSubmit = (e) => {
    axios.post('http://localhost:3001/submit', { id, name, price ,weight ,height})
    .then(result => {
        console.log(result);
        fetchProducts();
      })
  }
  const fetchProducts = () => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  }


  return (
   <>
       <center>
          <div style={{marginTop:'80px'}}>
            <h1>Appy for companies</h1>
             <strong>Name</strong>
            <input type="text" placeholder="Enter name" onChange={(e) => setId(e.target.value)}/>
          </div>
          <div>
             <strong>Department</strong>
            <input type="text"
              placeholder="Enter Department"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <strong>Role</strong>
            <input type="problem"
              placeholder="Enter Role"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <strong>preferred location</strong>
            <input type="weight"
              placeholder="Enter preferred location"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <strong>Salary Expectation</strong>
            <input type="Height"
              placeholder="Enter Salary Expectation"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>
            submit
          </button>
          </center>

          <h2>Applied Companies </h2>
<table border={1}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Role</th>
      <th>Preferred location</th>
      <th>Salary Expectation</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product, index) => (
      <tr key={index}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.weight}</td>
        <td>{product.height}</td>
      </tr>
    ))}
  </tbody>
</table>

     
    </>
  );
}

export default Bookaappoint;
const express = require("express");
const app = express();
const { products, people } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>home page</h1> <a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const productID = req.params;
  console.log(productID);
  // const singleProduct = products.find(
  //   (product) => product.id === Number(productID)
  // );
  // res.json(singleProduct);
  // console.log(singleProduct);
  const single = products.find((product) => {
    product.id === productID;
  });
  res.json(single);
});

app.get("/api/desc", (req, res) => {
  const decsData = products.map((product) => {
    const { desc } = product;
    return { desc };
  });
  res.json(decsData);
});
app.listen(5000, (err, res) => {
  console.log("website will listion on port 5000...");
});
//5:40

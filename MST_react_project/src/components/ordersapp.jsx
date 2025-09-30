import { useState } from "react";

function OrdersApp() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Pending" },
    { id: 2, product: "Phone", status: "Shipped" }
  ]);

  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");

  const addOrder = (e) => {
    e.preventDefault();
    setOrders([...orders, { id: parseInt(id), product, status }]);
    setId("");
    setProduct("");
    setStatus("");
  };

  return (
    <div>
      <h2>Orders List</h2>
      {orders.map((o) => (
        <p key={o.id}>
          {o.id} - {o.product} - {o.status}
        </p>
      ))}

      <h3>Add Order</h3>
      <form onSubmit={addOrder}>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <input
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Product"
        />
        <input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default OrdersApp;

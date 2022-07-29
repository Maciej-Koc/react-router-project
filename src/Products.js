import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="products/p1">Book</Link>
        </li>
        <li>
          <Link to="products/p2">Water</Link>
        </li>
        <li>
          <Link to="products/p3">Pencil</Link>
        </li>
      </ul>
    </section>
  );
}

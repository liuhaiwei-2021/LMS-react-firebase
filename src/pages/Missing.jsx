//NPM packages
import { Link } from "react-router-dom";

// Formatting -1 Why this is a const instead of a function like any other project
// Is ok to check resources online but modify them to fit your project style
// This shows lack of care and give a really bad impression
const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className="flexGrow">
        <Link to="/">Visit Our Homepage</Link>
      </div>
    </article>
  );
};

export default Missing;

import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password" required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p>
        {" "}
        New to Genius Car?{" "}
        <Link
          to="/singup"
          className="text-primary pe-auto text-decoration-none"
        >
          {" "}
          Please Sing up
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;

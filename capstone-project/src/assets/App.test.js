/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders App component with initial state", () => {
    render(<App />);

    // Check if the Navbar component is rendered
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check if the ProductList component is rendered
    expect(screen.getByText("ProductList Component")).toBeInTheDocument();
  });

  test("displays login form when '/login' route is accessed", () => {
    render(<App />, { route: "/login" });

    // Check if the LoginForm component is rendered
    expect(screen.getByText("LoginForm Component")).toBeInTheDocument();
  });

  test("displays cart when '/cart' route is accessed", () => {
    render(<App />, { route: "/cart" });

    // Check if the Cart component is rendered
    expect(screen.getByText("Cart Component")).toBeInTheDocument();
  });

  test("redirects to login when accessing '/cart' without logging in", () => {
    render(<App />, { route: "/cart", loggedIn: false });

    // Check if redirected to login
    expect(screen.getByText("LoginForm Component")).toBeInTheDocument();
  });

  test("adds product to cart when 'Add to Cart' button is clicked", () => {
    render(<App />);

    // Simulate adding a product to cart
    fireEvent.click(screen.getByText("Add to Cart"));

    // Check if the product is added to cart
    expect(screen.getByText("Cart Component")).toBeInTheDocument();
  });
});

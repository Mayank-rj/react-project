import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState({ name: "", email: "", fruit: "" });
  const navigate = useNavigate();
  let name, value;
  const HandleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const myData = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <h1>Fruit Details</h1>
        <h3>Get Details of your favourite fruit</h3>
        <form method="post">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={HandleInput}
              value={user.name}
              placeholder="Your Name"
            />
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={HandleInput}
              value={user.email}
              placeholder="Your Email"
            />
          </div>

          <div className="fruit">
            <label htmlFor="fruit">Favourite Fruit</label>
            <input
              type="text"
              list="favfruit"
              name="fruit"
              onChange={HandleInput}
              value={user.fruit}
              id="fruit"
              placeholder="Select Fruit"
            />
            <datalist id="favfruit">
              <option value="Banana"></option>
              <option value="Strawberry"></option>
              <option value="Tomato"></option>
              <option value="Blackberry"></option>
              <option value="Kiwi"></option>
              <option value="Lychee"></option>
              <option value="Pineapple"></option>
            </datalist>
          </div>
          <Link
            className="submit"
            onClick={(e) => {
              navigate("/details", { replace: true, state: { user } });
              myData(e);
            }}
          >
            Submit
          </Link>
        </form>
      </div>
    </>
  );
};

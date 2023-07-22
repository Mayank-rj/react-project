import React, { useEffect, useState } from "react";
import "./Details.css";
import { NavLink, useLocation } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  const user = location.state?.user;
  const [fruitData, setFruitData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(
          `https://www.fruityvice.com/api/fruit/${user.fruit}`
        );
        const json = await res.json();
        setFruitData({ ...json });
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  });

  return (
    <>
      <div className="details">
        <h1>Hello {user?.name}</h1>
        <h3>{user?.email}</h3>

        <p>Nutrition details of your favourite fruit Fruit {user?.fruit}:</p>

        <table width="70%">
          <tbody>
            <tr>
              <td>calories</td>
              <td>{fruitData?.nutritions?.calories}</td>
            </tr>
            <tr>
              <td>fat</td>
              <td>{fruitData?.nutritions?.fat}</td>
            </tr>
            <tr>
              <td>sugar</td>
              <td>{fruitData?.nutritions?.sugar}</td>
            </tr>
            <tr>
              <td>carbohydrates</td>
              <td>{fruitData?.nutritions?.carbohydrates}</td>
            </tr>
            <tr>
              <td>protein</td>
              <td>{fruitData?.nutritions?.protein}</td>
            </tr>
          </tbody>
        </table>
        <NavLink className="back submit" to="/">
          Back
        </NavLink>
      </div>
    </>
  );
};

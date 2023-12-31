import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getdata } from "../action/index.js";
import Formsecond from "./Formsecond.jsx";

function Tablesecond() {
  const [active, setActive] = useState(false);
  const [ID, setID] = useState(null);
  const [loading, setLoading] = useState(false);

  const data = useSelector((storedata) => {
    return storedata.data;
  });

  function handleEdit(id) {
    setActive(!active);
    setID(id);
  }

  useEffect(() => {
    setLoading(true);
    getdata();
    setLoading(false);
  }, [active]);

  return (
    <>
      {active ? <Formsecond toggle={setActive} id={ID} /> : ""}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>company_name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? data.data?.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el?.id}</td>
                    <td>{el?.name}</td>
                    <td>{el?.email}</td>
                    <td>{el?.phone}</td>
                    <td>{el?.company_name}</td>
                    <td>
                      <button
                        className="button-4 w9"
                        onClick={() => {
                          handleEdit(el?.id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            : "loading..."}
        </tbody>
      </table>
    </>
  );
}

export default Tablesecond;

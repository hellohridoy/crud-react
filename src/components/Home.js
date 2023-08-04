import React, { Fragment } from "react";
import { Button, Table } from "react-bootsrap";
import "bootstrap/dist/css/bootstrap. css";
import employee from "./Employee";

function Home() {
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {employee && employee.length > 0
              ? employee.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                    </tr>
                  );
                })
              : "No data faound"}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}
export default Home;

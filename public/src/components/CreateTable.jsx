import React from "react";
import { Table } from "./Table";
import { StatusPill } from "./TableStatusPills";

const getData = () => {
  const data = [
    {
      name: "Saul Fimbres",
      email: "sfimbres@necodex.com",
      status: "Inactive",
    },
    {
      name: "Roberto Amaya",
      email: "ramaya@necodex.com",
      status: "Active",
    },
  ];
  return [...data, ...data, ...data, ...data, ...data, ...data];
};

export const CreateTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Acciones",
        accesor: "action",
        Cell: (row) => (
          <div>
            <button onClick={(e) => handleEdit(isEdit(true))}>Edit</button>
          </div>
        ),
        id: "action",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  console.log(data);
  return (
    <>
      <div className="grid content-center ">
        <div className="rounded-lg bg-gray-100 text-gray-900 ">
          <main className="lg:px-10 pt-5">
            <div className="">
              <h1 className="text-xl font-semibold">
                Catalogo de practicantes
              </h1>
            </div>
            <div className="mt-8">
              <Table columns={columns} data={data} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

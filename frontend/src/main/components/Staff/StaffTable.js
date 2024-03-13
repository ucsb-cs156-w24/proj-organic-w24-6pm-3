import React from "react";
import OurTable from "main/components/OurTable";


export default function StaffTable({ staff }) {

  // staff Table 

    const columns = [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'courseId',
            accessor: 'courseId',
        },
        {
            Header: 'userId',
            accessor: 'userId',
        }
    ];
 

    return <OurTable
        data={staff}
        columns={columns}
        testid={"StaffTable"}
    />;
};
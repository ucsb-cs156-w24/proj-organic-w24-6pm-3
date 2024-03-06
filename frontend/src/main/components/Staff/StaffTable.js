import React from "react";
import OurTable from "main/components/OurTable";

// import { useBackendMutation } from "main/utils/useBackend";
// import { cellToAxiosParamsDelete, onDeleteSuccess } from "../Utils/StaffUtils";
// import { useNavigate } from "react-router-dom";
// import { hasRole } from "main/utils/currentUser";

export default function StaffTable({ staff }) {

    // const navigate = useNavigate();

    // const staffCallback = (cell) => {
    //     navigate(`/courses/${cell.row.values.id}/staff`);
    // };

    // const editCallback = (cell) => {
    //     navigate(`/courses/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching

    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/course/staff/all"]
    // );
    // Stryker restore all 

    // Stryker disable next-line all : TODO try to make a good test for this
    // const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }


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
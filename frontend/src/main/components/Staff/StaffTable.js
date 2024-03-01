import React from "react";
 import OurTable, { ButtonColumn } from "main/components/OurTable"
 import { useBackendMutation } from "main/utils/useBackend";
//  import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/components/Utils/CoursesUtils"
 import { useNavigate } from "react-router-dom";
 import { hasRole } from "main/utils/currentUser";

 export default function StaffTable({ staff, currentUser }) {

     const navigate = useNavigate();

    //  const editCallback = (cell) => {
    //      navigate(`/staff/edit/${cell.row.values.id}`);
    //  };

     // Stryker disable all : hard to test for query caching

     const deleteMutation = useBackendMutation(
         cellToAxiosParamsDelete,
         { onSuccess: onDeleteSuccess },
         ["/api/staff/all"]
     );
     // Stryker restore all 

     // Stryker disable next-line all : TODO try to make a good test for this
     const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

     const columns = [
         {
             Header: 'id',
             accessor: 'id',
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

    //  if (hasRole(currentUser, "ROLE_ADMIN") || hasRole(currentUser, "ROLE_INSTRUCTOR")) {
    //      columns.push(ButtonColumn("Edit", "primary", editCallback, "CoursesTable"));
    //      columns.push(ButtonColumn("Delete", "danger", deleteCallback, "CoursesTable"));
    //  }

     return <OurTable
         data={courses}
         columns={columns}
         testid={"StaffTable"} />;
    };
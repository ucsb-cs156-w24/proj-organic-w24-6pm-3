import React from "react";
 import OurTable from "main/components/OurTable"
//  import { useBackendMutation } from "main/utils/useBackend";
//  import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/components/Utils/CoursesUtils"
//  import { useNavigate } from "react-router-dom";
//  import { hasRole } from "main/utils/currentUser";

 export default function StaffTable({ staff }) {



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


     return <OurTable
         data={staff}
         columns={columns}
         testid={"StaffTable"} />;
    };
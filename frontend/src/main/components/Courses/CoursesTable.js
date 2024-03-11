import OurTable, { ButtonColumn } from "main/components/OurTable";
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/components/Utils/CoursesUtils";
import { hasRole } from "main/utils/currentUser";
import { useBackendMutation } from "main/utils/useBackend";
import { useNavigate } from "react-router-dom";

 export default function CoursesTable({ courses, currentUser }) {

     const navigate = useNavigate();

     const editCallback = (cell) => {
         navigate(`/courses/edit/${cell.row.values.id}`);
     };
     const staffCallback = (cell) => {
        navigate(`/courses/${cell.row.values.id}/staff`);
    };

     const joinCallback = (cell) => {
        navigate(`/courses/join/${cell.row.values.id}`); //JOIN
    };

     // Stryker disable all : hard to test for query caching

     const deleteMutation = useBackendMutation(
         cellToAxiosParamsDelete,
         { onSuccess: onDeleteSuccess },
         ["/api/courses/all"]
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
             Header: 'Name',
             accessor: 'name',
         },
         {
             Header: 'School',
             accessor: 'school',
         },
         {
             Header: 'Term',
             accessor: 'term',
         },
         {
             Header: 'StartDate',
             accessor: 'startDate',
         },
         {
             Header: 'EndDate',
             accessor: 'endDate',
         },
         {
             Header: 'GitHub Org',
             accessor: 'githubOrg',
         },
     ];
        columns.push(ButtonColumn("Join", "primary", joinCallback, "CoursesTable")); //JOIN

     if (hasRole(currentUser, "ROLE_ADMIN") || hasRole(currentUser, "ROLE_INSTRUCTOR")) {
         //columns.push(ButtonColumn("Join", "primary", joinCallback, "CoursesTable")); //JOIN
         columns.push(ButtonColumn("Edit", "primary", editCallback, "CoursesTable"));
         columns.push(ButtonColumn("Delete", "danger", deleteCallback, "CoursesTable"));
         columns.push(ButtonColumn("Staff", "danger", staffCallback, "CoursesTable"));
     }

     return <OurTable
         data={courses}
         columns={columns}
         testid={"CoursesTable"} />;
    };
import React from 'react'
import { useBackend } from 'main/utils/useBackend';

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CoursesTable from 'main/components/Staff/StaffTable';
import { Button } from 'react-bootstrap';
import { useCurrentUser} from 'main/utils/currentUser';

export default function StaffIndexPage() {

  const { data: currentUser } = useCurrentUser();

  
  const { data: staff, error: _error, status: _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      ["/api/staff/all"],
      // Stryker disable next-line all : GET is the default
      { method: "GET", url: "/api/staff/all" },
      []
    );

    // return (
    //   <BasicLayout>
    //     <div className="pt-2">
    //       {createButton()}
    //       <h1>Course</h1>
    //       <CoursesTable courses={courses} currentUser={currentUser} />
    //     </div>
    //   </BasicLayout>
    // )
}

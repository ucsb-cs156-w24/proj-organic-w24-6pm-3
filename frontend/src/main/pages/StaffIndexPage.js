import React from 'react'
import { useBackend } from 'main/utils/useBackend';

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import StaffTable from 'main/components/Staff/StaffTable';
// import { Button } from 'react-bootstrap';
import { useCurrentUser} from 'main/utils/currentUser';

export default function StaffIndexPage() {

  const { data: currentUser } = useCurrentUser();

//   const deleteButton = () => {  
    
//       return (
//           <Button
//               variant="primary"
//               href="/courses/staff"
//               style={{ float: "right" }}
//           >
//               Delete Staff 
//           </Button>
//       )
    
//   }
  
  const { data: staff, error: _error, status: _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      ["/api/courses/{courseId}/staff"],
      // Stryker disable next-line all : GET is the default
      { method: "GET", url: "/api/courses/{courseId}/staff" },
      []
    );

    return (
      <BasicLayout>
        <div className="pt-2">
          {/* {deleteButton()} */}
          <h1>Staff</h1>
          <StaffTable staff={staff} currentUser={currentUser} />
        </div>
      </BasicLayout>
    )
}

// import React from 'react';
// // import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
// // import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
// import { rest } from "msw";
// import { staffFixtures } from 'fixtures/staffFixtures';

// import StaffIndexPage from "main/pages/StaffIndexPage";

// export default {
//     title: 'pages/Staff/StaffIndexPage',
//     component: StaffIndexPage
// };

// const Template = () => <StaffIndexPage storybook={true}/>;

// export const Empty = Template.bind({});
// Empty.parameters = {
//     msw: [
//         // rest.get('/api/currentUser', (_req, res, ctx) => {
//         //     return res( ctx.json(apiCurrentUserFixtures.adminUser));
//         // }),
//         // rest.get('/api/systemInfo', (_req, res, ctx) => {
//         //     return res(ctx.json(systemInfoFixtures.showingNeither));
//         // }),
//         rest.get('/api/getStaff', (_req, res, ctx) => {
//             return res(ctx.json(staffFixtures.threeStaff));
//         }),
//     ]
// }


import React from 'react';
import StaffTable from 'main/components/Staff/StaffTable';
import { staffFixtures } from 'fixtures/staffFixtures';
import { currentUserFixtures } from 'fixtures/currentUserFixtures';
import { rest } from "msw";

export default {
    title: 'components/Staff/StaffTable',
    component: StaffTable
};

const Template = (args) => {
    return (
        <StaffTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    staff: []
};

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.args = {
    staff: staffFixtures.threeStaff,
    currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsAdminUser = Template.bind({});
ThreeItemsAdminUser.args = {
    staff: staffFixtures.threeStaff,
    currentUser: currentUserFixtures.adminUser,
}

ThreeItemsAdminUser.parameters = {
    msw: [
        rest.delete('/api/course/staff/all', (req, res, ctx) => {
            window.alert("DELETE: " + JSON.stringify(req.url));
            return res(ctx.status(200),ctx.json({}));
        }),
    ]
};
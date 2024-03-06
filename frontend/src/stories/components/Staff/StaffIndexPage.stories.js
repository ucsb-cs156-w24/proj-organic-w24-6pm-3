import React from 'react';
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { staffFixtures } from 'fixtures/staffFixtures';
import { rest } from "msw";

import StaffIndexPage from 'main/pages/StaffIndexPage';

export default {
    title: '/pages/StaffIndexPage',
    component: StaffIndexPage
};

const Template = () => <StaffIndexPage storybook={true}/>;

export const Empty = Template.bind({});
Empty.parameters = {
    msw: [
        rest.get('/api/currentUser', (_req, res, ctx) => {
            return res(ctx.json(apiCurrentUserFixtures.userOnly));
        }),
        rest.get('/api/systemInfo', (_req, res, ctx) => {
            return res(ctx.json(systemInfoFixtures.showingNeither));
        }),
        rest.get('/api/courses/{courseId}/staff', (_req, res, ctx) => {
            return res(ctx.json([]));
        }),
    ]
}

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.parameters = {
    msw: [
        rest.get('/api/currentUser', (_req, res, ctx) => {
            return res( ctx.json(apiCurrentUserFixtures.userOnly));
        }),
        rest.get('/api/systemInfo', (_req, res, ctx) => {
            return res(ctx.json(systemInfoFixtures.showingNeither));
        }),
        rest.get('/api/courses/{courseId}/staff', (_req, res, ctx) => {
            return res(ctx.json(staffFixtures.threeStaff));
        }),
    ],
}

export const ThreeItemsAdminUser = Template.bind({});

ThreeItemsAdminUser.parameters = {
    msw: [
        rest.get('/api/currentUser', (_req, res, ctx) => {
            return res( ctx.json(apiCurrentUserFixtures.adminUser));
        }),
        rest.get('/api/systemInfo', (_req, res, ctx) => {
            return res(ctx.json(systemInfoFixtures.showingNeither));
        }),
        rest.get('/api/courses/{courseId}/staff', (_req, res, ctx) => {
            return res(ctx.json(staffFixtures.threeStaff));
        }),
        // rest.delete('/api/courses/{courseId}/staff', (req, res, ctx) => {
        //     window.alert("DELETE: " + JSON.stringify(req.url));
        //     return res(ctx.status(200),ctx.json({}));
        // }),
    ],
}

import React from "react";

export const RouterConfig = [
    {
        exact: true,
        path: '/',
        redirect: '/customer/login'
    },
    {
        exact: true,
        authed: false,
        path: '/store/login',
        component: React.lazy(() => import("../login/login"))
    },
    {
        exact: true,
        authed: false,
        path: '/customer/login',
        component: React.lazy(() => import("../login/login"))
    },
    {
        exact: true,
        authed: false,
        path: '/store/signup',
        component: React.lazy(() => import("../signup/signup"))
    },
    {
        exact: true,
        authed: false,
        path: '/customer/signup',
        component: React.lazy(() => import("../signup/signup"))
    },
    {
        exact: true,
        authed: true,
        path: '/store/dashboard',
        component: React.lazy(() => import("../business/dashboard"))
    },
    {
        exact: true,
        authed: true,
        path: '/customer/dashboard',
        component: React.lazy(() => import("../customer/dashboard"))
    },
    {
        exact: true,
        authed: false,
        path: '/store/email-verification',
        component: React.lazy(() => import("../email-verification/email-verification"))
    },
    {
        exact: true,
        authed: false,
        path: '/customer/email-verification',
        component: React.lazy(() => import("../email-verification/email-verification"))
    },
    {
        exact: true,
        authed: true,
        path: '/store/business-info',
        component: React.lazy(() => import("../business/business-info"))
    },
    {
        exact: true,
        authed: true,
        path: '/store/business-info-step2',
        component: React.lazy(() => import("../business/business-info-step2"))
    },
    {
        exact: true,
        authed: false,
        path: '/store/forgot-password',
        component: React.lazy(() => import("../forgot-password/forgot-password"))
    },
    {
        exact: true,
        authed: false,
        path: '/customer/forgot-password',
        component: React.lazy(() => import("../forgot-password/forgot-password"))
    }
];
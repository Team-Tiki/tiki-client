import { lazy } from 'react';

export const LandingPage = lazy(() => import('@/page/landing/LandingPage'));
export const LoginPage = lazy(() => import('@/page/login/index/LoginPage'));
export const TermPage = lazy(() => import('@/page/signUp/index/TermPage'));
export const InfoFormPage = lazy(() => import('@/page/signUp/info/InfoFormPage'));
export const PasswordAuthPage = lazy(() => import('@/page/login/password/auth/PasswordAuthPage'));
export const PasswordResetPage = lazy(() => import('@/page/login/password/reset/PasswordResetPage'));
export const ShowcasePage = lazy(() => import('@/page/showcase/index/ShowcasePage'));
export const ArchivingPage = lazy(() => import('@/page/archiving/index/ArchivingPage'));
export const ErrorPage = lazy(() => import('@/shared/page/errorPage/ErrorPage'));
export const ComingsoonPage = lazy(() => import('@/shared/page/comingsoonPage/ComingsoonPage'));
export const DrivePage = lazy(() => import('@/page/drive/index'));
export const NotePage = lazy(() => import('@/page/handover/note/NotePage'));

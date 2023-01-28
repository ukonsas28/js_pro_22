import React from 'react';
import { PageWrapper } from 'Components/Common/PageWrapper';
import { AuthForm } from 'Components/AuthForm';
import { useSelector } from 'react-redux';
import { UserSelectors } from 'Store';

export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  return <PageWrapper>{loading ? <h1>Loading...</h1> : <AuthForm />}</PageWrapper>;
};

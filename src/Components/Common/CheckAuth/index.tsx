/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { UserSelectors } from 'Store';

type CheckAuthProps = {
  children: React.ReactNode;
};

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const token = useSelector(UserSelectors.getUserToken);

  if (!token) {
    return <Navigate to={routes.auth} />;
  }

  return <>{children}</>;
};

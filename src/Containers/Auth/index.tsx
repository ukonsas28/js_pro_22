/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect } from 'react';
import { PageWrapper } from 'Components/Common/PageWrapper';
import { AuthForm } from 'Components/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions, UserSelectors } from 'Store';
import { useNavigate } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

export const Auth = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const userLoading = useSelector(UserSelectors.getUserLoading);
  const userToken = useSelector(UserSelectors.getUserToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      dispatch(UserActions.setLoading(false));
      navigate(routes.main);
    }
  }, [userToken]);

  return <PageWrapper>{userLoading ? <h1>Loading</h1> : <AuthForm />}</PageWrapper>;
};

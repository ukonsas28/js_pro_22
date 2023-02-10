import { MainContent } from 'Components/MainContent';
import { useToggle } from 'Helpers/Hooks';
import React from 'react';

export const Main = () => {
  const [flag, toggle] = useToggle(true);
  return <MainContent flag={flag} toggle={toggle} />;
};

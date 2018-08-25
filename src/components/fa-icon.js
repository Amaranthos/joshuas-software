import React from 'react';
import styled from 'react-emotion';

const Icon = styled('i')({
    fontSize: '2em',
    color: 'initial'
});

export const FaIcon = ({ icon }) => (
    <Icon className={`fa fa-${icon}`}  />
);
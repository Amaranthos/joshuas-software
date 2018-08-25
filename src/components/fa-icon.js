import React from 'react';
import styled from 'react-emotion';

const Icon = styled('i')({
    color: 'initial'
});

export const FaIcon = ({ className, icon }) => (
    <Icon className={`${className} fa fa-${icon}`}  />
);
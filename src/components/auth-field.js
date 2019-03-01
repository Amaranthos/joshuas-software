import React from 'react';
import styled from '@emotion/styled';

const FieldSpan = styled('span')({
	display: 'block',
	boxSizing: 'border-box',
	margin: 0,
	padding: '20px 0'
});

const FieldLabel = styled('label')({
});

const FieldInput = styled('input')({
	border: 'none',
	margin: 0,
	padding: '4px 0',
	width: '100%',
});

export const AuthField = (field) => (
	<FieldSpan className={field.meta.dirty? 'dirty' : ''}>
		<FieldLabel>{field.label}</FieldLabel>
		<FieldInput {...field.input} type={field.type} />
	</FieldSpan>
);
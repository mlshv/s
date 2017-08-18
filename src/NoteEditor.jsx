import React from 'react';
import styled from 'styled-components';

const NoteEditor = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 1rem auto;
`;

const TitleInput = styled.input`
  flex-basis: 100%;
  margin-bottom: .5rem;
  padding: .25rem;
  font-size: 1.25rem;
  border: none;
  border-bottom: 1px solid #171717;
  border-radius: .25rem;
  outline: none;
`;

const NoteInput = styled.textarea`
  flex-basis: 100%;
  min-height: 100px;
  margin-bottom: .5rem;
  padding: .25rem;
  font-size: 1rem;
  border: 1px solid #171717;
  border-radius: .25rem;
`;

const SaveButton = styled.button`
  margin: 0;
  padding: .5rem 1rem;
  font-size: .875rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
`;

export default () =>
  (<NoteEditor>
    <TitleInput placeholder="Title" />
    <NoteInput placeholder="Note" />
    <SaveButton>Save</SaveButton>
  </NoteEditor>);

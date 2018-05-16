import styled from 'styled-components';
import checkMark from 'style/icons/check_mark.svg';
import spinner from 'style/icons/spinner.gif';

export const EditorSt = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0.5rem -0.5rem 0 -0.5rem;
  padding: 1rem 0.5rem 0.5rem 1rem;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0 2px #997f00;
  @media screen and (min-width: 48rem) {
    margin: 1rem 0 0.5rem 0;
    padding: 1.5rem 0.5rem 0.5rem 1.5rem;
  }
`;

export const TextInputs = styled.div`
  flex-grow: 1;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 0;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  outline: none;
  color: #444;
  background: transparent;
`;

export const NoteInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  margin-bottom: 0.5rem;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  border: none;
  outline: none;
  color: #444;
  background: transparent;
  resize: none;
`;

export const RoundButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: #343434;
  background-image: url(${props => (props.loading ? spinner : checkMark)});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: ${props => (props.loading ? '1.5rem' : '1rem')};
  outline: none;
  cursor: pointer;
  &:active {
    background-size: ${props => (props.loading ? '1.5rem' : '0.95rem')};
    box-shadow: ${props => (props.loading ? 'none' : 'inset 0 0 5px 5px rgba(0, 0, 0, 0.25)')};
  }
`;
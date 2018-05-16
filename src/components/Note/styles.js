import styled from 'styled-components';
import spinner from 'style/icons/spinner.gif';
import trashbox from 'style/icons/trashbox.svg';

export const NoteSt = styled.div`
  margin: 0.5rem -0.5rem;
  margin-bottom: 0;
  padding: 1rem 0.5rem 0.5rem 1rem;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0 2px #997f00;
  @media screen and (min-width: 48rem) {
    margin: 0.5rem 0;
    padding-bottom: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  @media screen and (min-width: 48rem) {
    padding-bottom: 0.5rem}
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const DeleteIcon = styled.img.attrs({
  src: trashbox,
})`
  width: 1.25rem;
  height: 1.25rem;
`;

export const Spinner = styled.img.attrs({ src: spinner, alt: '' })`
  display: block;
  width: 1.25rem;
`;

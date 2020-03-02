import styled from 'styled-components';

const MessageStyled = styled.div`
  .message-content {
    background-color: ${props => props.theme};

    &::before {
      border-bottom-color: ${props => props.theme};
    }
  }
`;

export default MessageStyled;

import styled from "styled-components";

const ItemWrapper = styled.div`
  cursor: pointer;
  border-bottom: 2px solid silver;
  width: 90%;
  padding: 15px 20px;
  display: flex;
  border-radius: 4px;
  background-color: white;
  color: silver !important;
  input,
  del {
    text-align: left;
    border: none;
    outline: none;
    padding: 5px 10px;
    flex: 1;
  }
  button {
    background: transparent;
    border: none;
  }

  .reject {
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    .reject {
      opacity: 1;
    }
  }
`;

export default ItemWrapper;

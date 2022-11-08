import styled from "styled-components";

const StyledForecast = styled.div`
  margin: 20px 5px;

  .title {
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: 700;
  }

  ul {
    display: inline;
  }

  li {
    list-style: none;
  }

  .daily-item {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    font-size: 14px;
    height: 40px;
    margin: 5px;
    padding: 5px 20px;
  }

  .small-icon {
    width: 40px;
  }

  .day {
    color: #212121;
    flex: 1 1;
    font-weight: 600;
    margin-left: 15px;
  }

  .description {
    flex: 1 1;
    margin-right: 15px;
    text-align: right;
  }
`;

export default StyledForecast;

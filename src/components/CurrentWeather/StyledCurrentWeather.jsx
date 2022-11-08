import styled from "styled-components";

export const StyledCurrentWeather = styled.div`
  width: 300px;
  border-radius: 6px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: #fff;
  background-color: #333;
  margin: 20px auto 0 auto;
  padding: 0 20px 20px 20px;

  .current__weather--top,
  .current__weather--bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .current__weather--city {
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    margin: 0;
    letter-spacing: 1px;
  }
  .current__weather--description {
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    margin: 0;
  }

  .current__weather--icon {
    width: 100px;
  }

  .current__weather--temperature {
    font-weight: 600;
    font-size: 70px;
    width: auto;
    letter-spacing: -5px;
    margin: 10px 0;
  }

  .current__weather--details {
    width: 100%;
    padding-left: 20px;
  }

  .paremeter-row {
    display: flex;
    justify-content: space-between;
  }

  .paremeter-label {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }

  .paremeter-value {
    font-size: 12px;
    font-weight: 600;
    text-align: right;
  }
`;

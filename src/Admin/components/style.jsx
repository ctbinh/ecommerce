import styled from "styled-components";
export const Container = styled.div`
  position: fixed;

  background-color: #297bff;
  height: 100vh;
  transition: 0.5s;
  overflow-x: hidden;
  /* width: 18.75em; */
  width: ${(props) => (props.toogle ? "16em" : "5.2em")};
`;
export const Heading = styled.h2`
  padding-left: 15px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8em;
  color: white;
  padding: 1em 1em;
`;
export const Img = styled.img`
  height: 1.4em;
  transform: translateX(-7px);
`;
export const List = styled.ul`
  /* position: fixed; */
  padding-left: 0.625em;
  /* padding-right: 0.625em; */
`;

export const Item = styled.li`
  list-style-type: none;
  padding: 1em 1em;
  font-size: 1.4em;
  color: white;
  display: flex;
  align-items: center;
  /* height: 3.125em; */
  /* transition: 0.1s; */
  position: relative;
  cursor: pointer;
  line-height: 1em;

  &:hover {
    color: #297bff;
    background-color: white;
    border-top-left-radius: 1.875em;
    border-bottom-left-radius: 1.875em;
  }
  &:hover::after {
    content: "";
    position: absolute;
    right: 0px;
    top: -3.125em;
    width: 3.125em;
    height: 3.125em;
    border-radius: 50%;
    box-shadow: 2em 2em 0 10px white;
    background-color: transparent;
  }

  /* &.hovered {
    &:hover::after {
      content: "";
      position: absolute;
      right: 0px;
      top: -3.125em;
      width: 3.125em;
      height: 3.125em;
      border-radius: 50%;
      box-shadow: 2em 2em 0 10px white;
      background-color: transparent;
    }
    &:hover::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: -3.125em;
      width: 3.125em;
      height: 3.125em;
      border-radius: 50%;
      box-shadow: 2em -2em 0px 10px white;
      background-color: transparent;
    }
  } */
  &:hover::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -3.125em;
    width: 3.125em;
    height: 3.125em;
    border-radius: 50%;
    box-shadow: 2em -2em 0px 10px white;
    background-color: transparent;
  }
`;
export const Title = styled.span`
  padding-left: 1.2em;
  display: inline-block;
`;
export const Main = styled.div`
  position: absolute;
  transition: 0.5s;
  width: ${(props) => "calc(100%" + " - " + parseInt(props.width) + "px)"};
  left: ${(props) => props.width};
`;
export const Wraper = styled.body`
  /* position: relative; */
`;
export const Search = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* gap: 10px; */
  position: relative;
`;
export const Input = styled.input`
  outline: none;
  padding: 10px 28px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;
export const IconSearch = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.8em;
`;
export const Avatar = styled.div`
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  width: 40px;
`;
export const ImgAvatar = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  /* transform: translateY(-8px); */
`;
export const HeaderWrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
`;
export const Icon = styled.div``;

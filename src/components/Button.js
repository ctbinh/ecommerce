import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Btn className={props.type}>{props.text}</Btn>
  )
}

const Btn = styled.button`
  width: 100%;
  padding: 5px;
  background: #0156FF;
  border-radius: 999px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
  font-size: 16px;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  word-break: break-word;
  border: 0;
  &.transparent {
    background: transparent;
    border: 3px solid gray;
    color: gray;
  }
`
export default Button
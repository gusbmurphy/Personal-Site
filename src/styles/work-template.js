import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
`

export const TextContainer = styled.div`
  flex: 3;
  padding-right: 2em;
`

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  filter: drop-shadow(0 3px 0.3rem rgb(0 0 0 / 25%));
`

export const ImagesContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  & > ${StyledImage}:not(:last-child) {
    margin-bottom: 1em;
  }
`

export const LinkList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0.1em;
  margin-bottom: 0.75em;
  display: flex;
  flex-direction: row;

  & > li:not(:last-child) {
    margin-right: 0.5em;
  }
`

export const Title = styled.h1`
  margin-bottom: 0.2em;
`

export const IconDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  align-items: center;
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.3em;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.1em;
`

export const DescriptionContainer = styled.div`
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 1em;

  & > p:not(:last-child) {
    margin-bottom: 0.8em;
  }

  ul {
    padding-left: 1.2em;

    li:not(:last-child) {
      margin-bottom: 0.2em;
    }
  }
`


import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
`

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Image = styled.img`
  height: 25vmin;
  pointer-events: none;
`

export const UserLink = styled.a`
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
`

export const SiteLink = styled.a`
  color: #e12241;
`

export const AuthorsSection = styled.h6`
  display: flex;
  flex-direction: column;
`

export const PresentationLink = styled.div`
  cursor: pointer;
`

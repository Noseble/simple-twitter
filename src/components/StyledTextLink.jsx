import styled from 'styled-components';

//Usage: <StyledTextLink> 連結名稱 </StyledTextLink>

const TextLink = ({ className, children }) => {
  return(
    <a href="/" className={className}> {children} </a>
  )
}

const StyledTextLink = styled(TextLink)`
  /* box model */
  height: 24px;
  border-bottom: 1px solid #0062FF;

  /* font & others */
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color:#0062FF;
`

export default StyledTextLink
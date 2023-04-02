import styled from "styled-components"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = styled(ToastContainer)`
.Toastify__toast-body{
  flex-direction: row-reverse;
  padding-left: 20px;
}
.Toastify__toast-icon{
  width: 56px;
  margin-right: 0px;
}

`

export default StyledToastContainer
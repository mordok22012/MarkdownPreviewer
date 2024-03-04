import styled from 'styled-components';

const StyledPreview = styled.div`
    background-color: #d3d3d375;
    width: "400px";
    min-height: "70vh";
    max-height: 70vh;
    padding: "10px";
    margin-left: "auto";
    margin-right: "auto";
    border: "1px solid #ced4da";
    overflow-y: scroll;
    

  

  code {
    font-family: 'Courier New', monospace;  
    color: #077f47; 
    white-space: pre-wrap; 
  }

  pre {
    font-family: 'Courier New', monospace;
    background-color: #333;
    color: #077f47;
    padding: 5px;
    border-radius: 5px;
    white-space: pre-wrap;

    
  }

  table {
    border: 1px solid black;
    tbody, td, tfoot, th, thead, tr  {
      border: 1px solid black;
      padding: 5px;
    }
  }

  
`;

// ...


export default StyledPreview;

import { useState, useEffect } from "react";
import { marked } from "marked";
import StyledPreview from './assets/styledPreview';

function App() {
  const markdownFirstLoad = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
   
  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.sv)
  
 `;
  const [textareaValue, setTextareaValue] = useState(markdownFirstLoad);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    
  };

 

 

  const styles = {
    container: {
      margin: "20px auto",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ebebf72e"
    },
    
    
    inputStyle: {
      backgroundColor: "#d3d3d375",
      width: "400px",
      minHeight: "70vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      border: "1px solid #ced4da",
    },
    
  };

  const htmlContent = marked.parse(textareaValue);

  return (
    <div className="app">
      <div className="container" style={styles.container}>
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <span className="badge text-dark">Markdown Previewer</span>
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <span className="badge bg-secondary">Markdown Input</span>
              </h4>
            </div>

            <div className="mark-input">
              <textarea
                id="editor"
                className="input"
                value={textareaValue}
                style={styles.inputStyle}
                onChange={handleTextareaChange}
                placeholder= "Markdowntext"
              ></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <span className="badge bg-secondary">Preview</span>
              </h4>
            </div>
            <StyledPreview
              id="preview"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
<div
              id="preview"
              style={styles.outputStyle} 
              dangerouslySetInnerHTML={{ __html: htmlContent }}
  /> 

*/
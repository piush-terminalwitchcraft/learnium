import { Markdown } from '@/Components/Elements';
import React from 'react'
import "./style.css"


export default function page() {

  const Sidebar = () => {
    return (
      <div className='articles-sidebar'>Hi sidebar
      {
        
      }
      </div>
    )
  }
  
  const Body = () => {
    return (
      <div className='articles-body'>
        <Markdown markdownText={markdownText}/>
      </div>
    )
  }

  return (
    <div className='articles'>
      <Sidebar />
      <Body />
    </div>
  )
}


const markdownText = `
Inline equation: $E=mc^2$
## SmartyPants

|                |ASCII                            |HTML                         |
|----------------|---------------------------------|-----------------------------|
|Single backticks|\`'Isn't this fun?'\`            |'Isn't this fun?'            |
|Quotes          |\`"Isn't this fun?"\`            |"Isn't this fun?"            |
|Dashes          |\`-- is en-dash, --- is em-dash\`|-- is en-dash, --- is em-dash|

Display equation:
$$
\\int_{n}^{m}\\int_{a}^{b} f(x) \\, f(y) dx \\, dy 
$$`;


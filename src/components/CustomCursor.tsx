
// import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const CustomCursor = () => {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color='193, 11, 111'
      outerAlpha={0}
      innerScale={1}
      outerScale={1.7}
    //   hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'white'
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
      // outerStyle={{
      //   mixBlendMode: 'exclusion'
      // }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'li',
        'img'
      ]}
    />
    </div>
  )
}

export default CustomCursor
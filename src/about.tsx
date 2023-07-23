import React from 'react'

type Props = {
    data: String[];
    func: React.Dispatch<React.SetStateAction<string>>;
}

const About = (props: Props) => {
  return (
    <div>
        <h1>about</h1>
        {props.data.map((item,idx)=>(
            <h4 key={idx}>{item}</h4>
        ))}
    </div>
  )
}
export default About;

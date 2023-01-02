import React from 'react'
import Card from '../../components/card/Card'
import './features.css'

const Features = () => {
  const featuresData = [
    {
      title: 'Improve your profit',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus consequuntur tempora nesciunt quis non illo labore impedit a molestias, laudantium porro corporis rem tempore.'
    },
    {
      title: 'Use AI to learn trend',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus consequuntur tempora nesciunt quis non illo labore impedit a molestias, laudantium porro corporis rem tempore.'
    },
    {
      title: 'Chat with others',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus consequuntur tempora nesciunt quis non illo labore impedit a molestias, laudantium porro corporis rem tempore.'
    },
    {
      title: 'Improve porfolio',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus consequuntur tempora nesciunt quis non illo labore impedit a molestias, laudantium porro corporis rem tempore.'
    }
  ]

  return (
    <div className="st__features section__padding">
      <div className="st__features-heading">
        <h1 className="gradient__text">
          Invest in your future now. Take the first step to financial
          independence. Make it happen.
        </h1>
        <p>Request Access now</p>
      </div>
      <div className="st__features-container">
        {featuresData.map((data, index) => (
          <Card title={data.title} text={data.text} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Features

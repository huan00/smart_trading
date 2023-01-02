import React from 'react'
import './blogs.css'
import Blog from '../../components/blog/Blog'
import { stock1, stock2, stock3, stock4 } from './import'

const blogData = [
  { imgUrl: stock1, date: 'Jan 01, 2023', title: 'First day of year' },
  { imgUrl: stock2, date: 'Jan 01, 2023', title: 'Best Chart to use' },
  { imgUrl: stock3, date: 'Jan 01, 2023', title: 'How to use MA' },
  { imgUrl: stock4, date: 'Jan 01, 2023', title: 'How to use ATR' }
]

const Blogs = () => {
  return (
    <div className="st__blogs section__margin">
      <div className="st__blogs-heading">
        <h1 className="gradient__text">We are blogging all the success</h1>
      </div>
      <div className="st__blogs-container">
        <div className="st__blogs-container__blog1">
          <Blog imgUrl={stock1} title="Open Chart data" date="Jan 01, 2023" />
        </div>
        <div className="st__blogs-container__blogs">
          {blogData.map((stock, index) => (
            <Blog imgUrl={stock.imgUrl} date={stock.date} title={stock.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs

import React from 'react'
import { Link } from 'react-router-dom'
import myNews from '../data/news'

const ShortArticle = (data) => {
  const { id, author, title, text } = data.data
  const url = '/news/' + id

  return (
    <div className="shortArticle">
      <h3><Link to={url}>{title}</Link></h3>
      <p className="shortArticle__author">{author}</p>
      <p>{text}</p>
    </div>
  )
}

class News extends React.Component {
  renderNews = () => {
    let newsTemplate = null
    if (myNews.length) {
      newsTemplate = myNews.map(function(item) {
        return <ShortArticle key={item.id} data={item} />
      })
    } else {
      newsTemplate = <p>No news</p>
    }

    return newsTemplate
  }

  render() {
    return (
      <div>
        <h1>News</h1>
        <p><strong>Some news</strong></p>
        <div>
          {this.renderNews()}
        </div>
        {
          myNews.length && <p className={'news__count'}>Article count: {myNews.length}</p>
        }
      </div>
    )
  }
}

export default News
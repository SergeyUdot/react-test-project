import React from 'react'
import { Link } from 'react-router-dom'
import myNews from '../data/news'

class Article extends React.Component {
  renderArticle = () => {
    const url = this.props.match.params.article
    const [ data ] = myNews.filter(item => item.id === url);
    let articleTemplate = null
    if(data) {
      const { title, author, bigText } = data
      articleTemplate = (
        <div>
          <h1>{title}</h1>
          <p className="shortArticle__author">{author}</p>
          <p>{bigText}</p>
          <p><Link to="/news">&laquo;&nbsp;Back to the News list</Link></p>
        </div>
      )
    } else {
      articleTemplate = (
        <div>
          <h1>404 Article does not exist</h1>
          <p><Link to="/news">&laquo;&nbsp;Back to the News list</Link></p>
        </div>
      )
    }

    return articleTemplate
  }

  render() {
    return (
      <>{this.renderArticle()}</>
    )
  }
}

export default Article
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Katie Price arrested at Heathrow Airport",
        "description": "The ex-model failed to turn up to court to face a hearing related to her multiple bankruptcies.",
        "url": "https://www.bbc.co.uk/news/articles/cg79gg1pz5no",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b5de/live/b806ba40-55cd-11ef-aebc-6de4d31bf5cd.jpg",
        "publishedAt": "2024-08-10T15:07:13.9489519Z",
        "content": "She was detained after returning to the UK. \r\nPhotos have emerged showing her with bandages around her face, near police vans at the airport.\r\nThe PA news agency understands Ms Price, who was born in… [+443 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "YouTube's former chief Susan Wojcicki dies aged 56",
        "description": "One of Google's earliest employees, Ms Wojcicki had been ill with lung cancer for two years.",
        "url": "https://www.bbc.co.uk/news/articles/c75nwnvvqr1o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9624/live/e2050aa0-570c-11ef-ad53-8bb9381a8e3d.jpg",
        "publishedAt": "2024-08-10T12:37:14.3546873Z",
        "content": "She was later persuaded to leave her job at chip giant Intel to join Google, becoming the firm's 16th employee. \r\nMs Wojcicki would go on to lead YouTube, the online video sharing company owned by Go… [+1295 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Russia launches counter-terror operation over Ukraine incursion",
        "description": "Russia imposes strict measures in three regions to try to halt a surprise incursion by Ukrainian troops.",
        "url": "https://www.bbc.co.uk/news/articles/c0qedq0penko",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9413/live/16d6d0b0-5703-11ef-ad53-8bb9381a8e3d.jpg",
        "publishedAt": "2024-08-10T11:37:17.4646408Z",
        "content": "The new security measures in the three Russian border regions were announced by the National Counter-Terrorism Committee (Nak) on Friday.\r\nIt said this was done \"to ensure the safety of citizens and … [+1460 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "This man travelled from Canada to Mexico on only public transport",
        "description": "William Hui made the journey along the US Pacific coast using only public buses and trains.",
        "url": "https://www.bbc.co.uk/news/articles/cg587pp5p2do",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/530b/live/ddf1f930-56a5-11ef-ad52-4f4b7597771d.jpg",
        "publishedAt": "2024-08-10T08:22:16.4643018Z",
        "content": "When it came to international borders, Mr Hui said he crossed them by foot.\r\nAt the US-Canada border, he said he was met with scepticism by border agents as he tried to explain the purpose of his jou… [+2022 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Plymouth fisherman lands first 'lost' Lego shark off Cornwall",
        "description": "The Devon fisherman's find came from a container lost from a cargo ship 27 years ago.",
        "url": "https://www.bbc.co.uk/news/articles/cwy553j377do",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cd67/live/64bd76d0-5677-11ef-b2d2-cdb23d5d7c5b.jpg",
        "publishedAt": "2024-08-10T06:52:16.0418122Z",
        "content": "A fisherman from Devon has landed the first shark of its kind - one made of Lego lost at sea off a cargo ship 27 years ago.\r\nRichard West, a 35-year-old fisherman living in Plymouth, found the plasti… [+470 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Weird and Free: How Harris's messaging is striking through",
        "description": "Weird and Free: How Harris's messaging is striking through",
        "url": "https://www.bbc.co.uk/news/articles/cwyjl912z7po",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7733/live/c3e006a0-5686-11ef-b2d2-cdb23d5d7c5b.jpg",
        "publishedAt": "2024-08-10T06:52:14.2766284Z",
        "content": "To upstage the former president, who only recently faced an assassination attempt, is no small feat, said Mr Polyansky.\r\nIts really pretty remarkable, he said.\r\nHer campaign appears further buoyed by… [+1173 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Dozens reportedly killed in Israeli strike on Gaza",
        "description": "Israel's military says it struck a Hamas command centre embedded in a school.",
        "url": "https://www.bbc.co.uk/news/articles/c8erk37yn2no",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4955/live/7b86c1b0-56d0-11ef-8c6e-1fc29663585e.jpg",
        "publishedAt": "2024-08-10T05:07:15.8298864Z",
        "content": "\"The death toll is now between 90 to 100 and there are dozens more wounded,\" agency spokesman Mahmud Bassal told AFP news agency.\r\n\"Three Israeli rockets hit the school that was housing displaced Pal… [+473 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Who is Adam Britton, 'The Monster of McMinns Lagoon'?",
        "description": "Even those who knew him best had no clue crocodile expert Adam Britton was torturing dozens of dogs to death.",
        "url": "https://www.bbc.co.uk/news/articles/cd109z73ek3o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1c53/live/2ac42ba0-5626-11ef-8f0f-0577398c3339.jpg",
        "publishedAt": "2024-08-09T22:37:14.1114131Z",
        "content": "This is the thing that's sort of haunted me since I've heard you would have never picked him for that,\" Mr Traucki says.\r\nThe news similarly rocked the broader community. Hundreds of people around th… [+1584 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Plane with 62 on board crashes in Brazil's Sao Paolo state",
        "description": "The passenger plane came down in the town of Vinhedo, Brazilian airline Voepass says.",
        "url": "https://www.bbc.co.uk/news/articles/c07e9x0d4p2o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png",
        "publishedAt": "2024-08-09T18:22:22.0705785Z",
        "content": "Local authorities said the plane landed on a residential building.\r\nBrazil's GloboNews television network showed pictures of a large area on fire and smoking wreckage in an area full of houses.\r\nPoli… [+309 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Donald Trump's story of scary helicopter trip is fiction, says Willie Brown",
        "description": "Willie Brown says story is \"fiction\" and rejects claim he told Trump \"terrible things\" about Kamala Harris.",
        "url": "https://www.bbc.co.uk/news/articles/c985enjgdy9o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e8db/live/b351f010-5662-11ef-983f-554187b31a7f.jpg",
        "publishedAt": "2024-08-09T17:22:15.1120504Z",
        "content": "San Francisco's former mayor Willie Brown has dismissed as \"fiction\" Donald Trump's story that they once endured a scary helicopter trip together.\r\nThe former president said on Thursday that he and M… [+2047 chars]"
    }
]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4300c39c050342eea4a12a47ebbbbe10";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Fatafat - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 60):""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News

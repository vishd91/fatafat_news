import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The New York Times",
      "title": "Susan Wojcicki, Former Chief of YouTube, Dies at 56 - The New York Times",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9FNHhBdjVkekhJNUtZYmtKT0dPM2xHdkE2bEY2S2V0d1NvQnF6eFp0c093N0sySWJ2Umx5cHFBelUtWDUxYWVHUndvcHJxSHdBWTVpa2tILUtYYS1sTVFHd01wd0dIMDhHeUZ3emdsNWphVzBKNk9z?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T09:57:28Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "San Francisco Chronicle",
      "title": "Trump says he has records of ‘bad helicopter landing’ with former S.F. Mayor Willie Brown - San Francisco Chronicle",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxObWpJWHpjSVU1cGhGMjV5M0dySXo1N2ZOZHczUTZhNU5pSTF3bnhwVG9lRzRZMHp1VXRId3dsNmh0d1cxOVVlaE5WS3h5Z01xOHhlN2Nmd0h6bkc3M29BRTVzMUpJMlF4VHdEVGhyOVp3bnB2QXFzRFNCVGhCN0RFQW15cWJfU19iT2lwLWNVYl81LVdUU2lRcl9hUTNlUHZ0WDNzV2JaRQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T09:23:55Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Reuters.com",
      "title": "Many dozens of Rohingya, including children, killed in drone attack while fleeing Myanmar, witnesses say - Reuters.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOQWo2dVFLdEdvSzVuc1ItWE5ZWi1yaUpZZHFSZmlvWUV5VHJUYldiSWM1TFREX0JpMW5SNHMzNXhIRjlaMUladnFPR2wyRDU2cFBURHNteDhxQ1FjUE5vU1Q5TXEyZFJoRGJRaEcyVmJmVzM1LXdZSnNDSkw3UEs0OTdnNl9DQzc2TVlSd1RibThrUmNTX3RXckR3cmxfaU54eVllaUl4TUplQXlUbVgtbG1Sd0QtSUcxQWFGaDNBeDlwZ2l5VEZR?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T08:20:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Associated Press",
      "title": "An Israeli airstrike on a Gaza school kills over 60 people, Palestinian health officials say - The Associated Press",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOLU1PaEN1ZXpmUHdDQi1oVGlWV3loZE1YNGRNZU45LWF4azlYekJQVkxudVJMNk90b2tTMzVOSGJOZDRtNlNWakxYWFpWb0xaVkFkazczT0pjQ1dNaHR0a3lVMUlPQnhJcVluVXFUekVZdFB5YWZMUU5oYWZCbTlYWXZyc0JYVnE1VHZaQTMwaUtNVm9hMmZfTHJCMVRKcDRmTU1OYUdpQQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T07:29:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Daily Beast",
      "title": "Putin Scrambles as Ukrainian Forces Near Russian Nuclear Plant - The Daily Beast",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQ0otMEtWUjhRWUdGVnFQSVFXRjNjYXRCZGppUUhpd2EzNHh4aWU4RlpsMmNTeS1ER3VuLWpHbTRkbFJ4dzczdDJmTkRsanZ1VFh6eTNwYXRVdVk4NXdKaHFaczJCWnkxajEwbTJVVF9mZThoV0JqN2JmZzhENVJSa1ZFLWdoNG0xSXVZNWRWTzNLVW81M0pybnpra0M?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T07:09:47Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Jerusalem Post",
      "title": "IDF can reach any place: Exhausted Gazans seek end of Israel-Hamas War above all - The Jerusalem Post",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBEMXdnQVZscnBFa1gxczlvYUdzQk1TU2JiRHBTRTJoaERRWExBQ05lbW9iblJmSXdXZjU1RTZSWTdzSkJQd2xjUXY2ZURCeExyS3JxWHhKakpranFmQnNmNW5IMA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T06:24:35Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The News International",
      "title": "Earth surrounded by solar storm risking satellites, power grids - The News International",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOd3ZocDZYZmVlSTZ1RWg2WGo5RVJEM1F3UGVqZ3EtNU16ZTNhWVNGQmRYOHAxZHdYNC1GanU3WU96c01ad1VJaU5maXBsMVpyZjNaNEoyZFBGR0x3eTZpZUhnN05KTldrb1FHbEdIdGhDa1pKVFBmbXcyQUFiU2U5dHNET2s1NmZvTTQyTmI3SlE2dGJlZ0VieWx0OGx1SmFqS0stQ2d4ONIBowFBVV95cUxPTS1mNFI0dm9ZYkdkMGJGZ2gtbFdMdkI4RmJuenhEc01IT1dVSXNzeUxZVDB3c01tTGtUWHV3MlVGTm41MDlNZnd2c3dfR09EeVpPRXBMSUVUNmw2M3BhekZjZUY3ZzE3UWpBZUxObVVIUW5rbW92WHJPSHJuYkJxdFp1MXZ5ckZ0a0w3ckk5UnR1eXdwcEpYSV82Y0llcjRCTFM0?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T06:09:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "NPR",
      "title": "Debby finally moves out of the U.S., though risk from flooded rivers remains - NPR",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNaTJWdDJadXpWZ09td0cxTXotMGxFTUlNVXdrUHZBVk9tR0lsMEU1SFQ2OHZJZmZmeDNYWkVHeGRQMWUyVmZMNGg2bUFtN2lKTl94dE96LTdyNmtaOUdmdUwtTVVCNUt6UHBqMERGVXhJWWhLb0xKTk5QaHZJY2VFOEln?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T06:08:50Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Reuters",
      "title": "Disney's D23 fan convention showcases 'Moana 2,' 'Incredibles 3' and 'Mufasa: The Lion King' films - Reuters",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOczF0Z1B1UURuR0RoUUJNbVlZVmVILW84NHQ3Wl9iLWlmeXh3NXN1VmZaSXF0U2FzMUE5YUVnRXRSai1xdlNHTHBxOWt2MHhGVmx4Q2haazREa3RWWlVjZW9wLWFHMmV6YXRGemdNNllob0M1ODlSa3JiUThzcDRMaUljX2hkN2tKZ0VJV0s2aTBienc2bWZnb0g4dzRFRzNkREpiTUxpOWZBeFFRekFFV0NGbnhLbTQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T05:52:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Washington Post",
      "title": "Sheriff steps down after deputy charged with murdering Sonya Massey - The Washington Post",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNQTBRVVVNVFVzSWM5QUR4SkozeFFxdHd5QmpDcjcwSHJ0YmRHSDQ2NFRDLUxsRVpzZzdwWUdOY01PVjI0UTdZMjgxcFJNcWt5b0tLSVpHOS04WHRBRjVVSGd5RWRuQndoanQwZWlrV1U3eU42MVo4dEdHdXR3MU9HQlY2cVo?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T05:39:15Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Chicago Sun-Times",
      "title": "Horoscope for Saturday, August 10, 2024 - Chicago Sun-Times",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPVVhVeFhJYUoxaGI0QjltYnE3R041Y05UT1ZibE9DWGJfdkdwTGdVQk9FMW8zaWIyRGRXQTFIalZUVnZHdm9feHRrZlo1ZWs1MkQwbDVOenE3Y2FxZEo1N2tGX0hhYTN5MU5BUl9ZUERNRFo0OEhNZ2M3TldSeTAwbXVKMk5jRU44YXNTQ2xZM0xCa2tkN2c?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T05:01:53Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Plane crash in Brazil's São Paulo state kills all 61 on board - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5QaGtEWmE4QzBpRmtNb0JFX215Q0w2N0F6OF9fY3ZybXV3U09JSGxBZUczeHJwVnpIVEJyelV3akNkWmpnR3doNFU4VU01RWFWRlIxQW5aVUstQdIBX0FVX3lxTFBCeVJadVoyYk9Kdl9ORzRyeWdrY2FHMkQ3ZGItYUxvUXc2Yk9LV3FieHJHbjN0ekYxNXJOQzhCM3FiQ0cyVG5SRm5NNzFza0tRcUFVTmRFT0NmOFpvMTdF?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T04:58:14Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Variety",
      "title": "‘Snow White’ Live-Action Trailer: Rachel Zegler Faces Off Against Gal Gadot’s Evil Queen and Meets the Seven Dwarfs - Variety",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQaEhqTWRxbUtyVXFwc3pXcXRBSlpQbDhBRktDdDhicW1US1EtN0g5eUJ3ZkszX1RmeDFhVUdmUEZHN3RURDktZFdEcnQ5NHkwaVRTUUZMZC1yNXlfRnI5TmtrWlJZNDRBTFd2VXFtSFF5ODlxOFk3QVlsb3E2Um9tRTFQcklWLTJaNC03b9IBkgFBVV95cUxQR0FOSTNrUjlXNUduUHFBS1NpdEg1azdaVGRxNE1SeDRnWHhMMHlmZGlTZl9kRWRZVm1tdTZJS0ktZjdnYXNBUkdLMDFsc0QyWUNMOFh0UjhMdy1kcV9XQ2hJWk9kRVpXXzJfN2pVTTVUNEdkcnNBQTY2OGt2Q01uVzI3bkRuV05pZlpLOGJRVDMzZw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T04:46:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "ESPN",
      "title": "Tomlin: Fumbles undid positives in Fields' debut - ESPN",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPUVBibUwwemRBVkhSVVdSLU1fQ3I5bTVuWTE5dUp0YXBwVmNaMjVJNDl5ei1zTkx6TXVDeXJmOTNHYW83Y003bVJ1ekJXLVVzdVJvNUd1QkdMYXh6NUhFYVd3WjRDb3VxWFVzWXhPR1JzRlpzbWtZWHVxV0dfeVNROVBJSXJabzJDTmczYTZQQjN0VmpZVUNrVnJHai10dnYyMEVFbzJn?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T04:15:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNN",
      "title": "Jesse Ventura calls JD Vance's criticism of Walz military record ‘despicable’ - CNN",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxObDFMOXFTR2U3ZWFId2NTcDhualNvUWNoYWdNZVhZVWEydElzMlVYZWRLRllYalctZlVFeGtuMDk4VkUzQjZJdHNKOUJxYXlpNmVQNUgtOHJzekJ2ZlVfdExMSFRXS0VnUmNuMDBrWkdNR2lBdlQtWGRRUTgwVHdETFF2d3pzUFd0MTRKWGF4NV8xenpKMk15MmN1ZVhNQQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T03:50:48Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Washington Post",
      "title": "Imane Khelif wins Olympic boxing gold amid online furor over gender - The Washington Post",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPbE1oNTl6dHpDMWxQaEE0N3lGR0N4T3laVFk5eEE3bnZzd3ZHdFo4bmRJSHBXdEE3bkNDWWE2SXBjT3RJSnpiSUZpZlVxZ3h1OFJNeGxlZ1Q5WlZWWTdoc0lMMWo5dlVRV2J0UGE1UTlJWG1odkpqNDVKbFE1QlN1bHRaWXQxNXYtU0k2bTc4OXdRcGcxT1NzcEtZRndjY2N0eGhBWjBxd0l1a3ZkWVp3?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T03:39:44Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "NBC Sports Bay Area",
      "title": "Why Aiyuk, 49ers might have no choice but to work out extension - NBC Sports Bay Area",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNZkwybzlQN3JXQVJhOF8xR0FJUlZIdFV3eUhzZWdCb25wZjl1dkNOeEF2Ul9zRWdLMV9FTEwwbGpqOTFQaEs1SFBHRWs2VVk0dklmQU1ZV3d2WDkwUUtKeV90emI4QXFqdTloOUxJOHJLWmNqS1hrMElOeC1Pd3hDanVlZnlnZlhsOW9obGk5UEJ3dmdZaEJycnI2LXdkejQzU2h2TEc3V3JWem1udktOdNIBuAFBVV95cUxOdENMYlQyajNSVFFIT3RSVENRYS1DOFRfUTJfVVhsMFVDVFJTTUFCS1laQUhFOUF5SkNrck1UeXJjcTRPY0hWV3otUWhnV1VjdUdGXzVOTllqM01lRGExd2VxX2l6SzFGX3pyLWp3TnZrTm56d1MyUW1BUXFuMXM0c3BtdktGY0wwMDFnQkFYNEItM3hMZHR4Z1FCcVpvaDZLemNkWUg0RGF4RTFxbWktc185LURndE5R?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T03:19:10Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Washington Post",
      "title": "U.S. restarts offensive weapons sales to Saudi Arabia after lengthy ban - The Washington Post",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNZ21TVHpMQldpbjROQkt6enJhdVNBVU5lMXVfS3ZkNlczVGpVSm5IX1UxNkRrejBOMk9KclFyYmx1NlotSlVTSTFhYjNuQVlSTGR1Ykx1Yk9xM2Q1Q3QxTHo5NGNwYlVtTU5zLUhBVGVBcjNwbm5pWHR3alk4cURYNU5FTnF4NHdfN2Rz?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T02:43:09Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Guardian US",
      "title": "Harris and Walz whip up crowd at packed Phoenix rally – but ‘we are the underdog’ - The Guardian US",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPMWR4dWtOZDhmQl80S1BZLXJSZjRHdGFVa2xQS1FZSDQtZXhXRGJLbWRyc25hMjNUcVZaZnhOWkNWN2tSMEZ0OUNWWElMZG15X256TjBlaE9MZGdoMUdhZEdBc3J0Y2lfVDJJNl9oMExqU0dXZlk5Y243MTFEUVRmdnk2S3FfSHlzaWlYcGJYOWVnUjRLbVZ3?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T02:31:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BBC.com",
      "title": "Ousted PM will return to Bangladesh, son says - BBC.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBzSHVEYVRaSmZrT2VlREhGalpmQ1pBXzRLeVJHci1abXFRTkZkTzNxZnhkbGw0MklPWU1uZ05qLWRRZ2NZNmJGTFNvTFczeDd0X0Q0UU1GcDdCd9IBX0FVX3lxTE9iOUlSMVoxaGVyOXl5WUFOOXlBTUxyY0s5RXIya2JBd052YzNaMHhGNnZuVUgtM0w4LTRUcDMwNVhjS0tnV2xYdDc5ZTdhWkZvMjBBOGtzX0RJdk1kTU1N?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-08-10T01:26:18Z",
      "content": null
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Fatafat - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Headlines" description="Description" imageUrl="/" newsUrl="" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Headlines" description="Description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Headlines" description="Description" />
          </div>
        </div>
      </div>
    )
  }
}

export default News

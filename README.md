# Image Search Using API in React

In this project, leveraging the `fetch` method in JavaScript, I have created an image search engine using the Unsplash website. This engine utilizes React and its components to fetch images from the website.

![unsplash_image1](https://github.com/user-attachments/assets/c86a4e7b-00f6-40bc-822f-a688fe6e39bd)

In this project, there is a significant difference between using fetch and axios. The main difference is that fetch requires one additional step, necessitating an extra then clause.

```
const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=your_Client_id&query=${value}`)
    .then(res => res.json())
    .then(data => {
      setResult(data.results)
    })
  }
```

When we send a request to the Unsplash website, the request is processed. Once approved, a response is returned to us. If the response contains an error, it will return an error message. If successful, it contains the information we need.

![unsplash_image](https://github.com/user-attachments/assets/316eee09-3a6c-4c06-adae-9c0120115c5e)


JSON is a lightweight, open standard text format for data interchange that is also readable by humans. In this project, we use JSON to build single-page applications (SPAs) to transfer data efficiently.


codes is [here]()


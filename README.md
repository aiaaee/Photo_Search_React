# Image Search Using API in React

In this project, leveraging the `fetch` method in JavaScript, I have created an image search engine using the Unsplash website. This engine utilizes React and its components to fetch images from the website.

When we send a request to the Unsplash website, the request is processed. Once approved, a response is returned to us. If the response contains an error, it will return an error message. If successful, it contains the information we need.

![unsplash_image1](https://github.com/user-attachments/assets/c86a4e7b-00f6-40bc-822f-a688fe6e39bd)

In this project, there is a significant difference between using fetch and axios. The main difference is that fetch requires one additional step, necessitating an extra then clause.

```
const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=gNYoN-Lb_a6htizxkrg0A00SDG6TJIWmfTFqmP5suyA&query=${value}`)
    .then(res => res.json())
    .then(data => {
      setResult(data.results)
    })
  }
```

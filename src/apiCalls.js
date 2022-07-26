export const getTrees = () => {
  return fetch('https://tree-pal-api.herokuapp.com/api/v1/trees')
  .then(response => {
    if (!response.ok) {
      throw new Error();
  }
    return response.json();
})
.catch(error => {
  console.log("error")
})
}

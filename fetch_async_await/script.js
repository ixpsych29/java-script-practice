(async () => {
  let fetchedData = await fetch("https://jsonplaceholder.typicode.com/users");
  fetchedData = await fetchedData.json();

  for (let val in fetchedData) {
    document.write(
      `Name: ${fetchedData[val].name}  &&  username: ${fetchedData[val].username} &&  email: ${fetchedData[val].email} <br>`
    );
  }

  console.log(fetchedData.status);
  console.log(fetchedData);
})();

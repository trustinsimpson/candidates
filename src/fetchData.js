async function fetchData(AllItems){
  let url = `https://viosecurity.sharepoint.com/sites/VioWelcome/_api/lists/getbytitle('Sales%20New%20Hire%20List)/${AllItems}` 

  Authorization: "Bearer " + accessToken
  Accept: "application/json;odata=verbose"

  
  
  await fetch(url)
    .then(response => response.json())
    .then(function(canData){
      console.log(canData);
  })
}

export default fetchData;
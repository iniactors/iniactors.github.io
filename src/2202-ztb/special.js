// APIでデータを受け取って表示する

const API_URL = 'https://script.google.com/macros/s/AKfycbz7F3xyHC-RunzHVuPT4hQEtCLMiHe5uHtK-ctqYX49-SfiMGXhu4arXiLAS66PqAMsFg/exec'

const getData = async () => {
    const res = await fetch(
        API_URL,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
        },
      }
    )
    if (res.status !== 200) {
      console.error('データの取得に失敗しました')
    }
    return res.json()
  }

/*
const data = fetch()
   .then((response) => {
       return response.json()
   })
   .then((result) => {
   })
   .catch((e) => {
       console.error(e)
   })
*/

window.onload = async () => {
    const data = await getData()
    console.log(data);
    const i = document.getElementById("t");
    // for(let sec=0; sec<length(data);sec++){
    for(const item of data){
        const n = document.createElement("p");
        n.textContent = item;
        n.classList.add("story-section");
        // const content = document.createTextNode(item);
        i.appendChild(n);

    }
    // i.textContent= data;
}
const başla = document.getElementById("başla");
const colors = document.getElementById("content");

async function get(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data
};


başla.addEventListener("click", resimGetir);

async function resimGetir(e) {
    let data = await get("https://jsonplaceholder.typicode.com/photos");
    try {
        for (let i = 0; i < data.length; i++) {
            setTimeout(() => {
                colors.innerHTML += 
                `
                <div class="col d-flex justify-content-center"><img src="${data[i].url}" alt="" width="100px"></div>
                `
            }, 100 * i);
            
        }
        
    } catch (error) {
        console.log(error);
    }
}


const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoa3NsaGpvbGx0Zmd5YmtieW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2MzUxMzAsImV4cCI6MjA0NDIxMTEzMH0.PdB3A9RoMZHik4jSgDicx6j1dUshJkVYhVKMvgRPmK0`;

window.addEventListener("DOMContentLoaded", init);

let url, productList, productTemplate;

function init() {
  const params = new URLSearchParams(document.location.search);
  const category = params.get("category");

  // Handle URL based on whether category exists or not
  if (category) {
    url = `https://dhkslhjolltfgybkbynh.supabase.co/rest/v1/info?select=artist&artist=eq.${category}`;
  } else {
    url = `https://dhkslhjolltfgybkbynh.supabase.co/rest/v1/info`; // Fetch all artists
  }

  console.log(url);
  getData();
}

function getData() {
  productList = document.querySelector("#productListSection");
  productTemplate = document.querySelector("#second").content;

  fetch(url, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then((json) => json.forEach(showProduct))
    .catch((error) => console.error("Error fetching data:", error)); // Added error handling
}

function showProduct(product) {
  console.log(product);

  const clone = productTemplate.cloneNode(true);
  clone.querySelector(".topHead").textContent = product.artist;
  clone.querySelector(".subtle").textContent = product.scene
  clone.querySelector(".dato").textContent = product.dato
  clone.querySelector("img").src = product.img

  productList.appendChild(clone);
}
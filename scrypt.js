const root = document.getElementById("general");
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const btn = document.querySelector(".btn");

function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

const fetchData = async () => {
  try {
    showLoader ();
    let data = await fetch(url);
    let response = await data.json();
    if (response) {
      makeUser(response);
    }
  } catch (error) {
    console.error (error.message);
  } finally {
    hideLoader ();
  }
};

const makeUser = (arr) => {
  if (arr) {
    root.innerHTML = null;
    arr.map((elem, index) => {
      let user = `<div class="cats">
      
        <img class="cats__img" src='${elem.url}'></img>
       </div>`;
      root.innerHTML += user;
    });
  }
};

btn.addEventListener("click", fetchData);
let Data = JSON.parse(localStorage.getItem("mobileData")) || [];

  let mobiledatacont = document.querySelector("#mobiledatacont");

  const display = (data, parent) => {
    parent.innerHTML = null;

    data.map(function (el) {
      let maindiv = document.createElement("div");
      maindiv.setAttribute("id", "nmaindiv");
      maindiv.addEventListener("click", function () {
        addtocart(el);
      });
      let imagediv = document.createElement("div");
      imagediv.setAttribute("id", "nimagediv");
      let paradiv = document.createElement("div");
      paradiv.setAttribute("id", "nparadiv");

      let image = document.createElement("img");
      image.setAttribute("id", "nimage");
      image.src = el.image;
      let brand = document.createElement("div");
      brand.setAttribute("id", "nbrand");
      brand.innerHTML = el.name;
      let title = document.createElement("p");
      title.setAttribute("id", "ntitle");
      title.innerHTML = el.desc;
      let price = document.createElement("div");
      price.setAttribute("id", "nprice");
      price.innerHTML = `Price: ${el.price}`;

      let ratingdiv = document.createElement("div");
      ratingdiv.setAttribute("id", "nratingdiv");

      let rating = document.createElement("span");
      rating.setAttribute("id", "nrating");
      rating.innerHTML = `Rating: ${el.rating}`;

      let rating_star = document.createElement("span");
      rating_star.setAttribute("class", "fa fa-star nchecked");

      ratingdiv.append(rating, rating_star);
      imagediv.append(image);
      paradiv.append(brand, title, price, ratingdiv);
      maindiv.append(imagediv, paradiv);
      parent.append(maindiv);
    });
  };

  let selectedprod = JSON.parse(localStorage.getItem("selected"))  || []; 

  function addtocart(el) {
  
    selectedprod.push(el);
    localStorage.setItem("selected", JSON.stringify(selectedprod));
    window.location.href="./singleproduct.html"
  }

  function nsortItem() {
    let sortvalue = document.querySelector("#nsort").value;

    if (sortvalue == "l2h") {
      Data = Data.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log(Data[0].price);
      console.log(Data);
      display(Data, mobiledatacont);
    } else if (sortvalue == "h2l") {
      Data = Data.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log(Data[0].price);
      console.log(Data);
      display(Data, mobiledatacont);
    }
  }

  display(Data, mobiledatacont);
  
  let length=   localStorage.getItem("cart");
    document.querySelector(".numb").innerText = length;
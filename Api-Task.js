// async function fetchData() {
//     try {
//       const response = await fetch('https://dummyjson.com/products');

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   async function renderProducts() {
//     const container = document.getElementById('products-container');
//     const data = await fetchData();
//     if (data) {
//       const container = document.querySelector('.products-container');

//       data.products.forEach(product => {
//           const card = document.createElement("div");
//           card.className = "card";

//           const card1 = document.createElement("div");
//           card1.className = "card 1";
//           card1.textContent = `Product Name: ${product.name}`;

//           const card2 = document.createElement("div");
//           card2.className = "card2";
//           card2.textContent = `Price: ${product.price}`;

//           const textSpan = document.createElement("span");
//           textSpan.className = "textSpan";
//           textSpan.textContent = `Description: ${product.description}`;

//           const pagetitle = document.createElement("h2");
//           pagetitle.className = "pagetitle";
//           pagetitle.textContent = product.name;

//           const imgSpan = document.createElement("img");
//           imgSpan.className = "imgSpan";
//           imgSpan.src = `${product.images[0]}`;

//           card.appendChild(card1);
//           card.appendChild(card2);
//           card.appendChild(textSpan);
//           card.appendChild(pagetitle);
//           card.appendChild(imgSpan);


//           container.appendChild(card);
//       });

//       console.log(data , "results----");
//   }
//   }
//   renderProducts();



async function fetchProducts() {
  try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Products:', data.products);

      if (data) {
          const container = document.querySelector('.productContainer');

          data.products.forEach(product => {
            
              const card = document.createElement("div");
              card.className = "card";

              const card1 = document.createElement("div");
              card1.className = "card 1";
              card1.textContent = `Product Name: ${product.name}`;

              const card2 = document.createElement("div");
              card2.className = "card2";
              card2.textContent = `Price: ${product.price}`;

              const textSpan = document.createElement("span");
              textSpan.className = "textSpan";
              textSpan.textContent = `Description: ${product.description}`;

              const pagetitle = document.createElement("h2");
              pagetitle.className = "pagetitle";
              pagetitle.textContent = product.name;

              const imgSpan = document.createElement("img");
              imgSpan.className = "imgSpan";
              imgSpan.src = `${product.images[0]}`;

              card.appendChild(card1);
              card.appendChild(card2);
              card.appendChild(textSpan);
              card.appendChild(pagetitle);
              card.appendChild(imgSpan);

              container.appendChild(card);
          });

          $('.productContainer').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            // Add other Slick Carousel options as needed
          });

          console.log(data);
      }
  } catch (error) {
      console.error('Error fetching products:', error);
  }
}

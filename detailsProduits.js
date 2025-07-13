const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const detailsProduits = document.getElementById("detailsProduit");

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((produit) => {
    detailsProduits.innerHTML = `
         <div class="row justify-content-center text-center">
         <div class="col-md-6">
            <img src="${produit.images[0]}" alt="${produit.title}" class="img-fluid rounded mx-auto d-block mb-3 card text">
          </div>
          <div class="col-md-4">
            <h2>${produit.title}</h2>
            <p><strong>Marque :</strong> ${produit.brand}</p>
            <p><strong>Description :</strong> ${produit.description}</p>
            <h5><strong>Prix :</strong> ${produit.price} €</h5>
            <p><strong>Évaluation :</strong> ⭐ ${produit.rating} / 5</p>
            <button id="addToCartBtn" class="btn btn-success mt-5">🛒 Ajouter au panier</button>
      </div> 
      </div>
    `;
  })
  .catch((error) => {
    detailsProduits.innerHTML = `<p>Erreur lors du chargement du produit.</p>`;
    console.error("Erreur:", error);
  });

const listProduits = document.getElementById("articleList");

async function chargerProduits() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const donnees = await res.json();
    const produits = donnees.products;

    listProduits.innerHTML = "";

    produits.forEach((produit) => {
      const product = document.createElement("div");
      product.className = "col-md-4 mb-4";

      product.innerHTML = `
        <div class="card h-100">
          <img src="${produit.images[0]}" alt="${produit.title}"
            class="card-img-top img-thumbnail"
            style="height: 380px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${produit.title}</h5>
            <p class="card-text"><strong>Prix: ${produit.price} €</strong></p>
            <p class="card-text text-warning fs-5">${getStars(
              produit.rating
            )}</p>
            <p class="card-text">${produit.description}</p>
            <a href="detailsProduit.html?id=${
              produit.id
            }" class="btn">Voir les détails</a>
          </div>
        </div>
      `;

      listProduits.appendChild(product);
    });
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
    listProduits.innerHTML = `<p>Erreur lors du chargement des produits.</p>`;
  }
}

chargerProduits();

function getStars(note) {
  const fullStars = Math.floor(note);
  const emptyStars = 5 - fullStars;
  return "★".repeat(fullStars) + "☆".repeat(emptyStars);
}

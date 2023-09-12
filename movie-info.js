document.addEventListener('DOMContentLoaded', function () {


    // Obtener el ID del producto almacenado en el almacenamiento local
    const productID = localStorage.getItem("productID");
  
  
    // Construir la URL del JSON
    const catID = localStorage.getItem("catID");
    const url = peliculasJSON;
  
  
    // Obtener el elemento donde se mostrarán los detalles del producto
    const productInfoContainer = document.getElementById('cat-list-container');
  
  
    // Realizar una solicitud GET al JSON
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Buscar el producto seleccionado por su ID
        const selectedProduct = data.products.find(product => product.id === parseInt(productID));
  
  
        if (selectedProduct) {
          // Llenar el contenedor con los detalles del producto
          productInfoContainer.innerHTML = `
                    <div class="container product-info">
                        <h2 class="p-info" id="product-name">${selectedProduct.name}</h2>
                        <p>Precio <span id="product-price">${selectedProduct.currency} ${selectedProduct.cost}</span></p>
                        <p>Descripción <span id="product-description">${selectedProduct.description}</span></p>
                        <p>Categoría <span id="product-category">${data.catName}</span></p>
                        <p>Cantidad de vendidos <span id="product-soldCount">${selectedProduct.soldCount}</span></p>
                        <p>Imágenes ilustrativas</p>
                        <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
                    </div>
                `;
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch(error => {
        console.error("Error al cargar los detalles del producto:", error);
      });
  });
  

//


  const peliculasJSON = "peliculas.json";

async function getJSONData(peliculas) {
    return fetch(peliculas)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            return { status: 'ok', data: response };
        })
        .catch(function(error) {
            return { status: 'error', data: error };
        });
}

document.addEventListener("DOMContentLoaded", function() {
    getJSONData(peliculasJSON).then(function(resultObj) {
        if (resultObj.status === "ok") {
            const peliculasArray = resultObj.data.peliculas;
            showCategoriesList(peliculasArray);
        }
    });
});

function showCategoriesList(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        htmlContentToAppend += `
            <div class="list-group-item">
                <div class="row">
                    <div class="col-3">
                        <img src="${array[i].image}" alt="peli image" class="img">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                                <h2 class="nombre-peli">${array[i].name}</h2>
                                <p>Año de estreno:${array[i].estreno}</p> 
                                <p>Autores: ${array[i].autores} </p>
                                <p>Género:${array[i].genero}</p>
                            </div>
                        </div>
                        <small class="text-muted"> </small>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}
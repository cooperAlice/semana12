

document.addEventListener('DOMContentLoaded', function () {


    // Obtener el ID del producto almacenado en el almacenamiento local
    const productID = localStorage.getItem("productID");
  
  
    // Construir la URL del JSON
    const catID = localStorage.getItem("catID");
    const url = `peliculas.json`;
  
  
    // Obtener el elemento donde se mostrarán los detalles del producto
    const productInfoContainer = document.getElementById('movie-info-container');
  
  
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
        const selectedProduct = data.peliculas.find(product => product.id === parseInt(productID));

        console.log(productID)
  
        if (selectedProduct) {
          // Llenar el contenedor con los detalles del producto
          productInfoContainer.innerHTML = `
                    <div class="container product-info">
                        <h2 class="p-info" id="product-name">${selectedProduct.name}</h2>
                        <p>Genero: <span id="product-genero">${selectedProduct.genero}</span></p>
                        <p>Estreno: <span id="product-estreno">${selectedProduct.estreno}</span></p>
                        <p>Autores: <span id="product-autores">${selectedProduct.autores}</span></p>
                        <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
                    </div>

                    <div class="container product-info">
                        <div>
                            <p class="p-info" id="product-comentario">${selectedProduct.comentario_1}</p>
                            <div class="estrella">
                                <p class="clasificacion1">
                                <input id="radio1_1" type="radio" name="estrellas" value="1">
                                <label for="radio1_1">★</label>
                                <input id="radio2_1" type="radio" name="estrellas2" value="2">
                                <label for="radio2_1">★</label>
                                <input id="radio3_1" type="radio" name="estrellas3" value="3">
                                <label for="radio3_1">★</label>
                                <input id="radio4_1" type="radio" name="estrellas4" value="4">
                                <label for="radio4_1">★</label>
                                <input id="radio5_1" type="radio" name="estrellas5" value="5">
                                <label for="radio5_1">★</label>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p class="p-info" id="product-comentario">${selectedProduct.comentario_2}</p>
                            <div class="estrella">
                                <p class="clasificacion2">
                                <input id="radio1_2" type="radio" name="estrellas6" value="1">
                                <label for="radio1_2">★</label>
                                <input id="radio2_2" type="radio" name="estrellas7" value="2">
                                <label for="radio2_2">★</label>
                                <input id="radio3_2" type="radio" name="estrellas8" value="3">
                                <label for="radio3_2">★</label>
                                <input id="radio4_2" type="radio" name="estrellas9" value="4">
                                <label for="radio4_2">★</label>
                                <input id="radio5_2" type="radio" name="estrellas10" value="5">
                                <label for="radio5_2">★</label>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p class="p-info" id="product-comentario">${selectedProduct.comentario_3}</p>
                            <div class="estrella">
                                <p class="clasificacion3">
                                <input id="radio1_3" type="radio" name="estrellas11" value="1">
                                <label for="radio1_3">★</label>
                                <input id="radio2_3" type="radio" name="estrellas12" value="2">
                                <label for="radio2_3">★</label>
                                <input id="radio3_3" type="radio" name="estrellas13" value="3">
                                <label for="radio3_3">★</label>
                                <input id="radio4_3" type="radio" name="estrellas14" value="4">
                                <label for="radio4_3">★</label>
                                <input id="radio5_3" type="radio" name="estrellas15" value="5">
                                <label for="radio5_3">★</label>
                                </p>
                            </div>
                        </div>
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
  
  
  
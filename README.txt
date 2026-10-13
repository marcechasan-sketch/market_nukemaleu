MARKET NUKEMALEU — GUÍA RÁPIDA
================================

ARCHIVOS
- index.html: estructura de la página.
- styles.css: colores, tamaños y diseño adaptable a celular/computador.
- catalog.js: catálogo editable de productos y precios.
- app.js: carrito, filtros, favoritos y envío del pedido por WhatsApp.
- images/: guarda aquí las fotografías de tus productos.

CÓMO VER LA PÁGINA EN TU COMPUTADOR
1. Descarga y descomprime el ZIP.
2. Abre la carpeta.
3. Haz doble clic en index.html. La página debe abrir en tu navegador.
4. Para probar el carrito, agrega productos y pulsa “Mi carrito”.

CÓMO CAMBIAR UN PRECIO O AGREGAR UN PRODUCTO
1. Abre catalog.js con el Bloc de notas o un editor de texto.
2. Cada producto tiene esta estructura:
   { id:"termo-rosa", name:"Termo rosa", price:65000, category:"Termos y botilitos", image:"images/termo-rosa.jpg", emoji:"🥤", description:"Termo infantil" }
3. price va como número en pesos colombianos, sin puntos ni signo $.
4. La categoría debe ser exactamente una de estas:
   "Loncheras", "Termos y botilitos", "Accesorios"
5. Para añadir un producto, copia una línea de producto y cambia todos los datos.
6. Cada producto necesita un id diferente, sin espacios. Separa los productos con coma.
7. Guarda catalog.js y actualiza la página en el navegador.

CÓMO SUBIR FOTOGRAFÍAS
1. Copia la fotografía a la carpeta images/.
2. Escribe su ruta en catalog.js, por ejemplo: image:"images/termo-rosa.jpg"
3. Recomendación: utiliza fotos cuadradas, JPG o WEBP, con nombres sencillos sin tildes ni espacios.
4. No reemplaces ni alteres las fotos originales de los productos; usa las fotografías autorizadas de tu catálogo.

WHATSAPP
El botón de pedido está configurado al número 305 244 3283 (Colombia).
Si cambias el número, edita en index.html y app.js el enlace que comienza por https://wa.me/573052443283
Debe incluir el indicativo del país y solo números.

ANTES DE PUBLICAR
- Reemplaza los productos de ejemplo, sus precios y descripciones por tu catálogo real.
- Sube las fotos reales.
- Revisa todos los precios y las condiciones de envío.
- Prueba el carrito en celular y computador.
- Los favoritos y el carrito se guardan en el navegador del visitante; no se sincronizan entre dispositivos.
- El pedido se envía por WhatsApp. Esta versión NO procesa pagos en línea, no descuenta inventario y no guarda pedidos en una base de datos.
- Los precios son valores de ejemplo para mostrar el funcionamiento: actualízalos antes de publicar.

ALOJAMIENTO GRATUITO
Puedes publicar estos archivos en GitHub Pages o Netlify usando su modalidad gratuita, sujeto a las condiciones vigentes de cada servicio. La publicación no incluye dominio propio gratuito necesariamente. En Netlify puedes desplegar una carpeta de sitio estático; en GitHub Pages debes crear un repositorio y habilitar Pages.
Si necesitas editar fotos/precios desde un panel sin tocar archivos, múltiples usuarios, inventario o pagos en línea, conviene usar una plataforma con administrador de tienda; eso ya no es una página estática.

MARKET NUKEMALEU — SITIO WEB ESTÁTICO

PÁGINAS
- index.html: Inicio con widgets modulares.
- tienda.html: catálogo completo con filtros y búsqueda.
- accesorios.html: productos de la categoría Accesorios.
- quienes-somos.html: propuesta de valor e historia de la marca.
- contacto.html: contacto y redes.

CÓMO PUBLICAR EN GITHUB PAGES
1. Sube todos los archivos y la carpeta images al repositorio, en la raíz.
2. En GitHub abre Settings > Pages.
3. En Build and deployment selecciona Deploy from a branch, branch main y carpeta /(root), y guarda.
4. Espera a que GitHub publique el sitio.

CÓMO CAMBIAR PRODUCTOS
Edita catalog.js. Cambia nombre, precio, categoría, descripción y la ruta de la foto. Guarda las fotos dentro de images/ y usa, por ejemplo, images/termo-rosa.jpg. Las categorías permitidas son Loncheras, Termos y botilitos, y Accesorios.

CÓMO AÑADIR O EDITAR WIDGETS DE INICIO
Edita home-widgets.js. Cada bloque tiene eyebrow, title, description, emoji, theme, link y button. Para crear otro, copia un bloque dentro de la lista y cambia sus textos/enlace. Temas disponibles: pink, mint, yellow y lilac. Los widgets son bloques configurables editando el archivo; esta versión estática no tiene un panel visual de administración.

IMPORTANTE
- Los precios de catalog.js son de ejemplo: verifica y actualiza los valores antes de publicar.
- Las ilustraciones con emojis son provisionales; sube las fotos reales de tus productos.
- Confirma el número de WhatsApp antes de publicar.
- Esta web no procesa pagos en línea ni gestiona inventario en servidor. El carrito prepara un pedido para consultar por WhatsApp.
- Para editar archivos desde GitHub, abre el archivo, pulsa el lápiz (Edit), modifica el contenido y selecciona Commit changes.

/*
  CATÁLOGO DE PRODUCTOS — Market Nukemaleu
  Para agregar o actualizar productos, edita la lista de abajo.
  - id: identificador único, sin espacios.
  - name: nombre que verá el cliente.
  - price: precio en pesos colombianos, solo número (sin puntos ni signo $).
  - category: usa "Loncheras", "Termos y botilitos" o "Accesorios".
  - image: ruta de la foto que subas a la carpeta images/. Ejemplo: "images/lonchera-rosa.jpg"
  - emoji: ilustración temporal si aún no tienes fotografía.
  - description: frase corta opcional.
  Nota: guarda las fotos en la carpeta images y escribe el nombre exacto del archivo.
*/
window.MARKET_PRODUCTS = [
  { id:"lonchera-giratoria", name:"Lonchera giratoria", price:105000, category:"Loncheras", image:"", emoji:"🎒", description:"Compartimientos para organizar sus alimentos" },
  { id:"lonchera-bento", name:"Lonchera tipo bento", price:85000, category:"Loncheras", image:"", emoji:"🍱", description:"Práctica para sus comidas favoritas" },
  { id:"kit-lonchera-termo", name:"Kit lonchera + termo", price:125000, category:"Loncheras", image:"", emoji:"🎁", description:"Un conjunto para sus aventuras" },
  { id:"termo-acero", name:"Termo infantil", price:65000, category:"Termos y botilitos", image:"", emoji:"🥤", description:"Para acompañar cada día" },
  { id:"botilito-tritan", name:"Botilito infantil", price:38000, category:"Termos y botilitos", image:"", emoji:"💧", description:"Hidratación para los más pequeños" },
  { id:"vasito-360", name:"Vasito entrenador 360", price:32000, category:"Termos y botilitos", image:"", emoji:"🍼", description:"Ideal para acompañar nuevas etapas" },
  { id:"pinchitos", name:"Pinchitos divertidos", price:12000, category:"Accesorios", image:"", emoji:"🍓", description:"Detalles que despiertan curiosidad" },
  { id:"cortadores", name:"Cortadores de alimentos", price:18000, category:"Accesorios", image:"", emoji:"⭐", description:"Dale formas divertidas a sus alimentos" },
  { id:"marcadores", name:"Marcadores comestibles", price:22000, category:"Accesorios", image:"", emoji:"🖍️", description:"Un toque creativo para sus preparaciones" },
  { id:"salseritos", name:"Salseritos", price:9000, category:"Accesorios", image:"", emoji:"🍯", description:"Pequeños aliados para la lonchera" },
  { id:"porta-snacks", name:"Porta snacks", price:15000, category:"Accesorios", image:"", emoji:"🍪", description:"Para llevar sus snacks favoritos" },
  { id:"capacillos", name:"Capacillos para lonchera", price:10000, category:"Accesorios", image:"", emoji:"🧁", description:"Color y orden en cada compartimiento" }
];

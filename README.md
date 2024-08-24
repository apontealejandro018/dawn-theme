## 1. Suscripción al Boletín

Este proyecto implementa un formulario de suscripción al boletín para capturar correos electrónicos y enviarlos a Mailchimp utilizando AWS Lambda como backend.

### Funcionalidad

- **Formulario de Suscripción:** El formulario permite a los usuarios ingresar su dirección de correo electrónico para suscribirse a nuestro boletín.
- **Backend en AWS Lambda:** El backend está implementado utilizando AWS Lambda, que recibe las solicitudes de suscripción y las envía a Mailchimp.
- **Integración con Mailchimp:** Utiliza la API de Mailchimp para agregar los correos electrónicos a una lista específica de suscriptores.

## 2. Plantilla Personalizada para Destacar Productos Populares

### Descripción
En la página de inicio, se ha creado una sección personalizada para mostrar productos mas vendidos, permitiendo destacar hasta tres productos de la colección `popular-products` previamente creada.

### Funcionalidad

- **Colección "Popular Products":** Se creó una colección en Shopify llamada `popular-products`. Esta colección se configura con la condición de que incluya los productos cuyo precio es mayor que 0 y  ordenados por mas vendidos. En el código de Shopify Liquid se utiliza un bucle que itera hasta tres productos de la colección "popular-products".
- **Estilo Personalizado:** Se aplican estilos personalizados para mostrar los productos de manera atractiva y responsive.

## 3. Oferta Especial con Contador de Tiempo

implementa una sección en la página de inicio para destacar una **oferta especial por tiempo limitado** en un producto específico.

### Características

- **Consulta de Metafields:** La fecha de finalización de la oferta se obtiene dinámicamente desde un Metafield personalizado asociado al producto.
- **Contador de Tiempo:** Se utiliza la librería externa *FlipDown* para crear un contador de tiempo visual y animado que se actualiza en tiempo real.
- **Descuento:** Tambien se creo el descuento y fue asignado al prodructo con la misma fecha de caducidad del Metafield.

## 4. Productos Relacionados

Se ha añadido una sección en la página de producto para mostrar productos relacionados basados en categorías y etiquetas asociadas.

### Consideraciones Técnicas

- **Colección Utilizada:** La colección *popular-products* es utilizada para la búsqueda de productos relacionados.
- **Límite de Productos:** Se limitan a mostrar hasta 8 productos.
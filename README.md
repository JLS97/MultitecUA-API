# Multitecua API

API for the Multitec UA Student Association Services.

## Requisitos

- Bun (v1.0.4)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/JLS97/MultitecUA-API

2. Ingresa al directorio de este proyecto:
    ```bash
    cd MultitecUA-API

3. Instala las dependencias:
    ```bash
    bun isntall

## Configuracion

Asegúrate de tener correctamente isntalado bun [https://bun.sh] y de configurar adecuadamente las variables de entorno antes de ejecutar la aplicación. Crea un archivo .env en la raíz del proyecto y establece las variables requeridas.

## Uso
### Iniciar la aplicacion
- Para iniciar la aplicación en modo normal:
    ```bash  
    bun start
- Para iniciar la aplicación en modo desarrollo (hot reaload):
    ```bash  
    bun dev
- Para iniciar los tests en modo normal:
    ```bash  
    bun test
- Para iniciar los test en modo desarrollor (hot reload):
    ```bash  
    bun test:dev
- Para hacer el build de la aplicación (genera fichero dist):
    ```bash  
    bun build
    
La aplicación se ejecutará en http://localhost:8080.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama para tus cambios: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commits: `git commit -m 'Añade nueva funcionalidad'`.
4. Sube tus cambios a tu fork: `git push origin feature/nueva-funcionalidad`.
5. Crea un Pull Request en GitHub.


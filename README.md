# Como levantar la aplicacion

Este proyecto se realizó con React en el Frontend y con NodeJs + Express en el backend. Para la base de datos utilicé PostgreSQL.
Di uso de la libreria Axios para hacer los pedidos desde el frontend a las rutas del backend.

## Comandos

(Antes de correr cualquier comando ve a la seccion de PostgreSQL(base de datos))

En el directorio principal puedes correr:

### `npm run seed`

Este comando es para correr un archivo seed que se encarga de llenar la base de datos con informacion de algunos de los edificos del poder judicial de Neuquen.
Luego de correr este comando nuestra applicación estará lista para iniciarse y utilizarse.

### `npm start`

Corre la app en el navegador y levanta el servidor.
En caso de no abrir el navegador automaticamente, dentro de tu navegador ir a la siguiente dirección: [http://localhost:3000](http://localhost:3000)

## PostgreSQL (base de datos)

(ATENCION) Si ya tienes PostgreSQL instalado y configurado en tu computadora puedes correr el siguiente comando: `createdb edificios_nqn`

Si no tienes PostgreSQL instalado deberas seguir los siguientes pasos:

- Instalar PostgreSQL desde este link tendras varias opciones segun tu sistema operativo [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- Configurar PostgreSQL:
  Genera tu usuario como admin de postgres.

  ```
  sudo -u postgres createuser --superuser $USER
  ```

  Solo Linux:
  Postgres va a requerir tu usuario y contraseña en cada conexion. Para evitar tener que hacerlo vamos a dar permisos a todas las conexiones locales.

  - Entra a donde estan los archivos de configuracion de postgres (si no sabes cual es tu version de postgres completa la busqueda en la terminal con la tecla Tab).
    ```
    cd /etc/postgresql/VERSION_DE_TU_POSTGRES/main/
    ```
  - Edita el archivo pg_hba.conf con el editor de terminal nano.
    ```
    sudo nano pg_hba.conf
    ```
  - En la parte de abajo, editá las líneas que hablen de IPv4 e IPv6 remplazando md5 por trust. Deberia quedarte así…

    ```
    # IPv4 local connections:
    host all all 127.0.0.1/32 trust

    # IPv6 local connections:
    host all all ::1/128 trust
    ```

  - Guarda ( ctrl+O, va a pedirte un enter para confirmar el nombre) y sali ( ctrl+X).
  - Luego de actualizar tu archivo .conf, reiniciá el proceso de Postgres. Hacelo con este comando desde la terminal:
    ```
    sudo service postgresql restart
    ```

# PopFilms

## Librerias utilizadas

```
npm install
```
```
ng add @angular/material
```

```
ng add @ng-bootstrap/ng-bootstrap
```

```
ng g interceptor auth
```

```
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PopFilms</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

  <style>
    /* Colores personalizados */
    body {
      background-color: #f8f9fa;
    }

    .navbar {
      background-color: #343a40;
    }

    .navbar .navbar-brand, .navbar .nav-link {
      color: #ffffff;
    }

    .navbar .nav-link:hover {
      color: #ffd700; /* Dorado para hover */
    }

    .card {
      border: none;
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-body {
      background-color: #ffffff;
    }

    .card-title {
      font-weight: bold;
      color: #333;
    }

    .card-text {
      color: #6c757d;
    }

    .footer {
      background-color: #343a40;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .aside {
      background-color: #343a40;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }

    .aside .list-group-item {
      background-color: transparent;
      color: white;
    }

    .aside .list-group-item:hover {
      background-color: #ffd700;
      color: #343a40;
    }
  </style>
</head>

<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">PopFilms</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Películas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Series</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Personas</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Contenedor principal -->
  <div class="container-fluid">
    <div class="row">
      <!-- Aside (filtro o categoría) -->
      <aside class="col-md-3 col-lg-2 mt-4">
        <div class="aside">
          <h4>Filtrar</h4>
          <ul class="list-group">
            <li class="list-group-item">Acción</li>
            <li class="list-group-item">Comedia</li>
            <li class="list-group-item">Drama</li>
            <li class="list-group-item">Ciencia ficción</li>
            <li class="list-group-item">Animación</li>
          </ul>
        </div>
      </aside>

      <!-- Contenedor de películas -->
      <div class="col-md-9 col-lg-10 mt-4">
        <h2 class="text-center mb-4">Películas Populares</h2>
        <div class="row">
          <!-- Bucle de películas -->
         
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div class="card">
                <a routerLink>
                  <!-- Imagen de la película -->
                  <img src="https://pics.filmaffinity.com/Venom_El_aultimo_baile-351925980-large.jpg" class="card-img-top rounded" alt="titulo}">
                </a>
                <div class="card-body">
                  <!-- Título de la película -->
                  <h5 class="card-title text-center">titulo</h5>
                  <!-- Fecha de estreno -->
                  <p class="card-text text-center">22/10/2024</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <!-- Estrella y calificación -->
                    <i class="fas fa-star" style="color: gold;"></i>
                    <span class="ms-2">8.6</span>
                    <span class="text-muted ms-1">(2367 votos)</span>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer mt-5">
    <p>&copy; 2024 PopFilms. Todos los derechos reservados.</p>
  </footer>

  <!-- Bootstrap JS y dependencias -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>

</html>


```

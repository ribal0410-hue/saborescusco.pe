// ============================================
// MENÚ INTERACTIVO CON FILTROS
// ============================================

// Datos del menú (puedes agregar más platos aquí)
const menuData = [
  // ENTRADAS
  {
    id: 1,
    nombre: "Papa a la Huancaína",
    descripcion: "Papas sancochadas con crema de ají, queso y galleta",
    precio: 18.00,
    imagen: "la huancaina.jpg",
    categoria: "entradas"
  },
  {
    id: 2,
    nombre: "Causa Rellena",
    descripcion: "Papa amarilla rellena de pollo, palta y mayonesa",
    precio: 20.00,
    imagen: "causa.jpg",
    categoria: "entradas"
  },
  {
    id: 3,
    nombre: "Anticuchos",
    descripcion: "Corazón de res marinado con ají panca y especias",
    precio: 15.00,
    imagen: "anticucho.jpg",
    categoria: "entradas"
  },
  
  // PLATOS PRINCIPALES
  {
    id: 4,
    nombre: "Cuy Chactado",
    descripcion: "Cuy entero aplastado y frito, servido con papas doradas",
    precio: 45.00,
    imagen: "images_cuy.jpg.jpg",
    categoria: "principales"
  },
  {
    id: 5,
    nombre: "Chiri Uchu",
    descripcion: "Plato típico con cuy, gallina, cecina, chorizo y maíz",
    precio: 38.00,
    imagen: "images_chiriuchu.jpg",
    categoria: "principales"
  },
  {
    id: 6,
    nombre: "Rocoto Relleno",
    descripcion: "Rocoto relleno de carne, queso, papa con pastel",
    precio: 28.00,
    imagen: "images_rocoto.jpg",
    categoria: "principales"
  },
  {
    id: 7,
    nombre: "Lomo Saltado",
    descripcion: "Lomo de res saltado con cebolla, tomate y papas",
    precio: 32.00,
    imagen: "lomo_saltado.jpg",
    categoria: "principales"
  },
  {
    id: 8,
    nombre: "Aji de Gallina",
    descripcion: "Pollo deshilachado en crema de ají amarillo y nueces",
    precio: 25.00,
    imagen: "aji.jpg",
    categoria: "principales"
  },
  {
    id: 9,
    nombre: "Sopa de Quinua",
    descripcion: "Quinua orgánica con verduras y hierbas andinas",
    precio: 18.00,
    imagen: "images_sopa.jpg",
    categoria: "principales"
  },
  
  // POSTRES
  {
    id: 10,
    nombre: "Suspiro Limeño",
    descripcion: "Dulce de manjar blanco con merengue y canela",
    precio: 12.00,
    imagen: "suspiro.jpg",
    categoria: "postres"
  },
  {
    id: 11,
    nombre: "Mazamorra Morada",
    descripcion: "Postre tradicional de maíz morado con frutas",
    precio: 10.00,
    imagen: "mazamorra-morada.jpg",
    categoria: "postres"
  },
  {
    id: 12,
    nombre: "Arroz con Leche",
    descripcion: "Arroz cremoso con leche, canela y pasas",
    precio: 8.00,
    imagen: "arroz.jpg",
    categoria: "postres"
  },
  
  // BEBIDAS
  {
    id: 13,
    nombre: "Chicha Morada",
    descripcion: "Refresco de maíz morado con piña y canela",
    precio: 8.00,
    imagen: "images_chicha_morada.jpg",
    categoria: "bebidas"
  },
  {
    id: 14,
    nombre: "Mate de Coca",
    descripcion: "Infusión de hojas de coca, ideal para el soroche",
    precio: 6.00,
    imagen: "images_mate_coca.jpg",
    categoria: "bebidas"
  },
  {
    id: 15,
    nombre: "Anisado",
    descripcion: "Licor artesanal de anís, dulce y aromático",
    precio: 10.00,
    imagen: "images_anisado.jpg",
    categoria: "bebidas"
  },
  {
    id: 16,
    nombre: "Emoliente",
    descripcion: "Bebida caliente de hierbas medicinales",
    precio: 7.00,
    imagen: "images_emoliente.jpg",
    categoria: "bebidas"
  },
  {
    id: 17,
    nombre: "Inca Kola",
    descripcion: "La bebida peruana original, sabor dorado único",
    precio: 5.00,
    imagen: "inka.jpeg",
    categoria: "bebidas"
  }
];

// Función para renderizar los platos
function renderMenu(platos) {
  const menuGrid = document.getElementById('menuGrid');
  
  if (!menuGrid) return;
  
  if (platos.length === 0) {
    menuGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-utensils"></i>
        <p>No hay platos en esta categoría</p>
      </div>
    `;
    return;
  }
  
  menuGrid.innerHTML = platos.map(plato => `
    <div class="menu-item-card" data-categoria="${plato.categoria}">
      <img src="${plato.imagen}" alt="${plato.nombre}" class="menu-item-img" onerror="this.src='https://placehold.co/300x300/8B0000/white?text=${encodeURIComponent(plato.nombre)}'">
      <div class="menu-item-info">
        <div class="menu-item-header">
          <h3>${plato.nombre}</h3>
          <span class="menu-item-price">S/ ${plato.precio.toFixed(2)}</span>
        </div>
        <p class="menu-item-desc">${plato.descripcion}</p>
        <span class="menu-item-cat">${getCategoriaNombre(plato.categoria)}</span>
      </div>
    </div>
  `).join('');
}

// Función para obtener el nombre de la categoría
function getCategoriaNombre(categoria) {
  const categorias = {
    'entradas': '🥗 Entrada',
    'principales': '🍽️ Principal',
    'postres': '🍰 Postre',
    'bebidas': '🥤 Bebida'
  };
  return categorias[categoria] || categoria;
}

// Función para filtrar por categoría
let categoriaActual = 'todos';

function filtrarPorCategoria(categoria) {
  categoriaActual = categoria;
  
  if (categoria === 'todos') {
    renderMenu(menuData);
  } else {
    const filtrados = menuData.filter(plato => plato.categoria === categoria);
    renderMenu(filtrados);
  }
  
  // Actualizar botones activos
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    if (btn.dataset.categoria === categoria) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Event Listeners para los filtros
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar todos los platos al inicio
  renderMenu(menuData);
  
  // Agregar eventos a los botones de filtro
  const filtros = document.querySelectorAll('.filtro-btn');
  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      const categoria = btn.dataset.categoria;
      filtrarPorCategoria(categoria);
    });
  });
});

// Smooth scroll para navegación 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== "#" && href !== "") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
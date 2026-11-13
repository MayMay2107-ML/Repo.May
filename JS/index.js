const datosServicios = {
  softgel: {
    titulo: "Soft Gel",
    imagen: "../Imagenes/WhatsApp Image 2026-11-12 at 22.11.35.jpeg",
    descripcion: "Extensiones de tips de gel pre-moldeados aplicados con técnica de nivelación en zona de cutícula para un acabado súper natural, ligero y duradero."
  },
  polygel: {
    titulo: "Poly Gel",
    imagen: "../Imagenes/WhatsApp Image 2026-11-12 at 22.23.05.jpeg",
    descripcion: "Sistema híbrido que combina la resistencia del acrílico con la ligereza del gel. Permite esculpir y dar estructura resistente."
  },
  semipermanente: {
    titulo: "Esmaltado Semipermanente",
    imagen: "../Imagenes/WhatsApp Image 2026-11-12 at 22.22.28.jpeg",
    descripcion: "Esmaltado de curado en cabina UV/LED sobre el largo de tu uña natural. Mantiene el color y el brillo intactos durante semanas."
  },
  kapping: {
    titulo: "Kapping",
    imagen: "../Imagenes/WhatsApp Image 2026-11-12 at 22.22.52.jpeg",
    descripcion: "Capa protectora de gel aplicada sobre tu uña natural para darle grosor, resistencia y evitar que se quiebre mientras crece."
  },
  mantenimiento: {
    titulo: "Mantenimiento y Retirado",
    imagen: "../Imagenes/WhatsApp Image 2026-11-12 at 22.33.29.jpeg",
    descripcion: "Relleno y renovación del crecimiento de tu sistema cada 15 a 21 días, o remoción segura del producto cuidando tu uña natural."
  },
  presson: {
    titulo: "Uñas Press-on",
    imagen: "../Imagenes/WhatsApp Image 2026-11-12 at 22.21.55.jpeg",
    descripcion: "Set de uñas reutilizables hechos a tu medida y diseñados a mano. Ideales para lucir uñas impecables al instante, fáciles de colocar y quitar sin dañar tu uña natural."
  }
};

function abrirModal(servicioSeleccionado) {
  const infoServicio = datosServicios[servicioSeleccionado];
  document.getElementById("modalImagen").src = infoServicio.imagen;
  document.getElementById("modalTitulo").textContent = infoServicio.titulo;
  document.getElementById("modalDescripcion").textContent = infoServicio.descripcion;
  document.getElementById("modalOverlay").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

function cerrarModalFondo(evento) {
  if (evento.target.id === "modalOverlay") {
    cerrarModal();
  }
}
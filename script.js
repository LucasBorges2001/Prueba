// Lógica compartida
function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Muestra la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

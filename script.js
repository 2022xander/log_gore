// Ejemplo de cómo agregar dinámicamente filas a las tablas usando JavaScript

// Agregar empleados dinámicamente
const empleados = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', area: 'TI', puesto: 'Desarrollador', email: 'juan@example.com', celular: 123456789 },
    { id: 2, nombre: 'Ana', apellido: 'López', area: 'HR', puesto: 'Gerente', email: 'ana@example.com', celular: 987654321 },
    // Agrega más empleados aquí
];

const tablaEmpleados = document.querySelector('#empleados tbody');

empleados.forEach(empleado => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${empleado.id}</td>
        <td>${empleado.nombre}</td>
        <td>${empleado.apellido}</td>
        <td>${empleado.area}</td>
        <td>${empleado.puesto}</td>
        <td>${empleado.email}</td>
        <td>${empleado.celular}</td>
    `;
    tablaEmpleados.appendChild(fila);
});

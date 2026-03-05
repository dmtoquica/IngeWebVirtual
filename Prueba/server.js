const express = require('express'); // Dependencia para crear la API
const app = express();
app.use(express.json()); // Permite que la API entienda formato JSON

// Simulación de Base de Datos (Modularización conceptual)
const habitaciones = [
    { id: 101, estado: 'libre' },
    { id: 102, estado: 'ocupada' }
];

// RUTA DE RESERVA (Aquí demuestras todo)
app.post('/reservar', (req, res) => {
    try {
        const { roomId } = req.body; 

        // SEGURIDAD BÁSICA: Validación de entrada
        if (!roomId || typeof roomId !== 'number') {
            return res.status(400).json({ error: "ID de habitación inválido" });
        }

        // LÓGICA DE NEGOCIO (Modularización)
        const habitacion = habitaciones.find(h => h.id === roomId);

        if (!habitacion) {
            return res.status(404).json({ error: "La habitación no existe" });
        }

        if (habitacion.estado === 'ocupada') {
            // MANEJO DE ERRORES: Error controlado
            return res.status(409).json({ error: "Habitación ya ocupada" });
        }

        habitacion.estado = 'ocupada';
        res.status(200).json({ mensaje: "¡Reserva exitosa!", habitacion });

    } catch (error) {
        // MANEJO DE EXCEPCIONES: Evita que el servidor se apague
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.listen(3000, () => console.log("🏨 Hotel API corriendo en puerto 3000"));
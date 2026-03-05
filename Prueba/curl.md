#iniciar el servidor
node server.js
#caso de éxito
curl -X POST http://localhost:3000/reservar -H "Content-Type: application/json" -d '{"roomId": 101}'
#caso de pcomprobación ya reservado
curl -X POST http://localhost:3000/reservar -H "Content-Type: application/json" -d '{"roomId": 101}'
#seguridad básica
curl -X POST http://localhost:3000/reservar -H "Content-Type: application/json" -d '{"roomId": "hack-intent"}'
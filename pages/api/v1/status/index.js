function status(request, response) {
  response.status(200).json({ chave: "Espada de Hemeus" });
}

export default status;

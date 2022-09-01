import Database from "../../../database/db";
const allAvos = async (request, response) => {
    const db = new Database();
    const id = request.query.id;
    const avocado = await db.getById(id);
    /* response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({data: avocado})); */
    response.status(200).json(avocado);
};

export default allAvos;
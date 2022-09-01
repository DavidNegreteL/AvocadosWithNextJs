import Database from "../../../database/db";
const allAvos = async (request, response) => {
    const db = new Database();
    const allEntries = await db.getAll();
    const dataLength = allEntries.length;
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({data: allEntries, dataLength}));
};

export default allAvos;
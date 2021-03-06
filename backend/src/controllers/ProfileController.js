const connection = require("../database/connection");
module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;
    const incident = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*")
      .first();

    return response.json(incident);
  },
};

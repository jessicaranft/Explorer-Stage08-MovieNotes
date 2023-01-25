const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesController {
  async create(req, res) {
    const { title, description, rate, tags } = req.body;
    const { user_id } = req.params;
    const checkRateRange = (rate >= 1 && rate <= 5);

    if(!checkRateRange) {
      throw new AppError("Você deve inserir um número de 1 a 5.");
    }
    
    const note_id = await knex("movie_notes").insert({
      title,
      description,
      rate,
      user_id,
    });

    /*
    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    });

    await knex("movie_tags").insert(tagsInsert);
    */

    res.json();
  }

}

module.exports = NotesController;
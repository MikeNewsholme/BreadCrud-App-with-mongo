const React = require("react");
const baker = require("../controllers/bakers_controller");
const baker_seed = require("../models/baker_seed");
const Default = require("./layouts/Default");

function New({ bakers }) {
  return (
    <Default>
      <h2>Add a new bread</h2>
      <form method="POST" action="/breads">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id=" name" required />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
        <label htmlFor="imageUpload">
          Click Choose File to upload an image
        </label>
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
          {bakers.map((baker) => {
            return (
              <option value={baker.id} key={baker.id}>
                {baker.name}
              </option>
            );
          })}
          <option value="Rachel">Rachel</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Chandler">Chandler</option>
          <option value="Ross">Ross</option>
          <option value="Phoebe">Phoebe</option>
        </select>

        <input
          type="file"
          name="file"
          id="file"
          pattern="([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$"
        />
        <br />
        <input type="submit" />
      </form>

      <div className="backButton">
        <a href="/breads">
          <button>Go back to the index</button>
        </a>
      </div>
    </Default>
  );
}
module.exports = New;

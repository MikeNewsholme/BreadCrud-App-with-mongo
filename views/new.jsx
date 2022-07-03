const React = require('react')
const Default = require('./layouts/Default')

function New(){
    return(
        <Default>
            <h2>Add a new bread</h2>
            <form >
                <label htmlFor='name'>Name</label>
                <input
                type='text'
                name= 'name'
                id = ' name'
                required
                />
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input
                type="checkbox"
                name="hasGluten"
                id="hasGluten"
                defaultChecked
                />
                <label htmlFor="imageUpload">Click Choose File to upload an image</label>
                <input
                type='file'
                name='file'
                id='file'
                pattern = '([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$'

                />
                <br />
                <input type='submit' />
                

            </form>


<div className="backButton">
  <a href="/breads"><button>Go back to the index</button></a>
</div>

          

        </Default>
    )
}
module.exports = New
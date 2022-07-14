const React = require('react')
const Default = require('./layouts/Default')

function Show({bread, index}){
    console.log(bread.name)
    return(
        <Default>
            <h2>Show Page!!!</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                   
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>Baked by {bread.getBakedBy()}</p>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
            </form>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

            <li><a href='/breads'>Go home</a></li>
                   </Default>
    )
}

module.exports = Show
import React, {useState, useEffect} from 'react';

function Search(props)
{

//const [query, SetQuery] = useState('');

let handleSearch = (event) => {
let query = event.target.value; 
console.log(query);
let searchList = props.pokeListArray;
let searchListNames = searchList.map ((el) => el.name)
searchListNames = searchListNames.filter(function(item){ return item.toLowerCase().search(query.toLowerCase()) !== -1 })
console.log(searchListNames);
 
props.someFunction (searchListNames)
{
    return searchListNames;
}
}




useEffect(() => {

   
  }, [])
    return(
        <div>
       <input onChange={handleSearch} type="text"/>

        </div>
    )
}

export default Search;
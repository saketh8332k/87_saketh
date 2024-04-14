import React,{useState} from 'react';
function Q1(){
    const [searchQuery,setSearchQuery]=useState('');
    const [items,setItems]=useState(['apple','banana','mango','grapes']);
    
    const handleFilter=(e)=>{
        setSearchQuery(e.target.value);
    }

    const filteredItems=items.filter(items=>items.toLowerCase().includes(searchQuery.toLowerCase()))
    return(
        <>
            <form>
                <input type='text' value={searchQuery} placeholder='Search for a thing...' onChange={handleFilter}/>
            </form>
            <ul>
                {filteredItems.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
export default Q1;
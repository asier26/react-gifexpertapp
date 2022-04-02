import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

//rafc to create automatically
const GifExpertApp = () => {
    const categoriesList = ['Naruto'];
    const [categories, setCategories] = useState(categoriesList);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                { categories.map(category => <GifGrid key={ category } category={ category } />) }
            </ol>
        </>
    );
}
 
export default GifExpertApp;

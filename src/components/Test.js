import itemDecoration from "./ItemsDecoration";
import ListItems from "./ListItems";

itemDecoration.map((item) => {
    return(
        <ListItems item ={item}/>
    )
})
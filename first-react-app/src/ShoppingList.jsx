import ShoppingListItem from "./ShoppingListItem";
export default function ShoppingList({items}){
    return(
        <ul>
        {items.map(i=> <ShoppingListItem 
        key={i.id}
        item={i.item} 
        quantity={i.quantity} 
        completed={i.completed}/>)}
        </ul>
        //pode ser feito assim tbm dnetro da ul
        //<ShoppingListItem key={i.id} {...i}/>
    )

}


// TODO: create a component that displays a single bakery item

export default function displayBakeryItem(props) {
        const {name, description, price, image} = props.item;
        return (
            <div class="box">
                <img class = "img" src={image}/> 
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
                <button onClick={() => props.updateCart(props.index)}>Add to cart</button>
            </div>
        );
}

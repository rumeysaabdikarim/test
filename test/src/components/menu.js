function menu(props){
    return <div className="menu">
    <img src={props.img}></img>
    <div>
     <h3> {props.name} </h3>
     <p> {props.option} </p>
     <h3>$ {props.price} </h3>
     <button>Order Now</button>
    </div>

    </div>
}
export default menu
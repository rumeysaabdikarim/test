function Assing (props){
            return <div className="box">
              <img src={props.image}></img>
                 <div>
                  <button className={props.btn}>{props.button}</button>
                
                    <h2>{props.name}</h2>
                    <p>{props.lorem}</p>
                    </div>

                    <div className="profile">
                    <img src={props.img}></img> 
                    <div>
                    <h4>{props.n}</h4>   
                   <p>{props.time}</p>
                    </div>
                
                    </div>
                          
                 </div>
               }
               export default Assing 
import { useSelector } from 'react-redux';


function ReviewTile({review}) {


    // const userId=useSelector(state=>state.session.user.id)
    // const reviews=useSelector((state)=>Object.values(state.review))
    
  
            return (
                <>
                <p>{`${review.description}`}{`${review.rating}`}</p>
                <div className="star-rating">
                {[...Array(5)].map((star, rate) => {
                  rate += 1;
                  return (

                    <button
                      type="button"
                      key={review.rating}
                      className={rate <= review.rating ? "on" : "off"}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
            
                </>
            )
        } 
       
 
  



export default ReviewTile
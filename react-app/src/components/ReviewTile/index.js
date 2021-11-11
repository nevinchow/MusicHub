import { useSelector } from 'react-redux';


function ReviewTile({review}) {


    // const userId=useSelector(state=>state.session.user.id)
    // const reviews=useSelector((state)=>Object.values(state.review))
    
  
            return (
                <>
                <p>{`${review.description}`}{`${review.rating}`}</p>
            
                </>
            )
        } 
       
 
  



export default ReviewTile
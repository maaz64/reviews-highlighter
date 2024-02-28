import { data } from '../data';
import Review from './Review';


function ReviewList() {
  return (

    <div className="list">
      <h1 style={{textAlign:'center'}}>Reviews List</h1>
      {data.map((d)=>
      
      <Review key={d.review_id} data={d}/>
      )}
    </div>
    
  )
}

export default ReviewList;
import ReviewHighlighter from "./ReviewHighlighter";
import "./style.css";
const arr = [1, 2, 3, 4, 5];

function Review({ data }) {
  let i = data.rating_review_score;
  return (

    <div className="item" key={data.review_id}>
      <div className="logo">
        <img src={data.source.icon} alt="" />
      </div>
      <div className="heading">
        <div className="headingContent">
          <p><strong>{data.reviewer_name}</strong> <span>wrote a review at</span> <strong>{data.source.name}</strong></p>
          <span >
            {
              arr.map(() => {
                i = i-2;
                return (
                  <>
                    {i >= 0 ?
                      <>
                        <img className="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="" />
                      </>
                      :
                      <>
                        <img className="star"
                          src="https://cdn-icons-png.flaticon.com/128/929/929566.png" alt="" />
                      </>
                    }

                  </>
                )
              })
            }
          </span>
          <small className="date">{data.date}</small>
        </div>
        <div className="headingIcon">
          <img src="https://cdn-icons-png.flaticon.com/128/3394/3394579.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/128/3106/3106777.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/128/13911/13911834.png" alt="" />
        </div>
      </div>
      <div className="content" >
        <ReviewHighlighter text={data.content} indicesArr={data.highlight_indices} topic={data.analytics[data.analytics.length - 1]?.topic} />
      </div>
    </div>
  )
}

export default Review
{/*  */ }
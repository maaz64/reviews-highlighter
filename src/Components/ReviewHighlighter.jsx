
const ReviewHighlighter = ({text,indicesArr,topic})=> {

    if(indicesArr==undefined){
      return <p>{text}</p>
    }
    const startingIndex = indicesArr[0][0]==-1? 0 : indicesArr[0][0];
    const startingText = text.slice(0,startingIndex);

    return (
      <>
      
        {startingText}
      {
        indicesArr.map((arr, i)=>{
          const startIndex = arr[0]==-1?0:arr[0];
          const endIndex = arr[1];
          const highlightedText = text.slice(startIndex,endIndex+1)
          const nextIndex = i==indicesArr.length-1?arr[indicesArr.length-1][1]:indicesArr[i+1][0]; 
          const untilNextIndexText = text.slice(endIndex+1,nextIndex)

          return(
            <>
            <p>
              <span data-tooltip={topic} className={arr[2]=='Positive'?'positive':arr[2]=='Negative'?'negative':arr[2]=='Neutral'?'neutral':'mixed'} >{highlightedText}</span>
              {untilNextIndexText}
            </p>
            </>
          );

        })
      }
   
        
      </>
    );
}

export default ReviewHighlighter;
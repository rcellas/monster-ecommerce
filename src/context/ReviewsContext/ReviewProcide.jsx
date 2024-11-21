import { ReviewsContext } from './ReviewsContext';
import useReviews from '../../hooks/useReviews';

const ReviewsProvider = ({children}) => {
  const { reviews, setReviews } = useReviews()
  return (
    <ReviewsContext.Provider value={{reviews, setReviews}}>
        {children}
    </ReviewsContext.Provider>
  )
}

export default ReviewsProvider
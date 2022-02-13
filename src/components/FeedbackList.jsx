import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import React from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet!</p>;
  }

  return (
    // this return has animation on add and delete
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.rating} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.rating}
  //         item={item}
  //         handleDelete={handleDeleteTwo}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;

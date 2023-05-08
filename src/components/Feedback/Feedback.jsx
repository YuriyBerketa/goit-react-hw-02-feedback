// import PropTypes from 'prop-types';
// import React from 'react';

// export class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//     handleClickBtn = evt => {
      
//         this.setState(prevState => ({
//             [evt]: prevState[evt] + 1,
//         }))
//     }
    
//   handleGoodClick = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleNeutralClick = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleBadClick = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return this.countTotalFeedback()
//       ? Math.round((good * 100) / this.countTotalFeedback())
//       : 0;
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h2>Please leave feedback</h2>
//         </div>
//         <ul>
//           <li>
//             <button type="button" onClick={this.handleGoodClick}>
//               Good
//             </button>
//           </li>
//           <li>
//             <button type="button" onClick={this.handleNeutralClick}>
//               Neutral
//             </button>
//           </li>
//           <li>
//             <button type="button" onClick={this.handleBadClick}>
//               Bad
//             </button>
//           </li>
//         </ul>
//         <div>
//           <h2>Statistics</h2>
//         </div>
//         <ul>
//           <li>
//             <span>Good: </span> {this.state.good}
//           </li>
//           <li>
//             <span>Neutral: </span> {this.state.neutral}
//           </li>
//           <li>
//             <span>Bad: </span> {this.state.bad}
//           </li>
//         </ul>
//         <ul>
//           <li>
//             <span>Total: {this.countTotalFeedback()} </span>
//           </li>
//           <li>
//             <span>
//               Positive feedback: {this.countPositiveFeedbackPercentage()}
//             </span>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }


import {
  Button
} from "./Notification.styled";

import PropTypes from 'prop-types';

export const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type='button'
          key={option}
          onClick={onLeaveFeedback}
          data-type={option}
        >{option}
        </Button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
}
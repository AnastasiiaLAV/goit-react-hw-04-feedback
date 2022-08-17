import {useState} from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Buttons from "./FeedbackOptions/FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const btnName = ['good', 'neutral', 'bad']

  const handleChange = (event) => {

    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
        case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const totalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
   return Math.round((good / totalFeedback()) * 100) || 0;
  }

  return (
      <div>
        <Section title="Please leave feedback">
          <Buttons options={btnName} onLeaveFeedback={handleChange} />
        </Section>

        <Section title="Statistics">
        {totalFeedback <= 0 ? (<Notification message="There is no feedback" />) :
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            feedback={countPositiveFeedbackPercentage()}
        />)
          }
        </Section>
      </div>
    );
}



// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   btnKey = Object.keys(this.state);
  
//   onClick = (e) => {
//     const key = e.target.textContent;
//     this.setState(preState => ({
//       [key]: preState[key] + 1,
//     }))
//   }

//   countTotalFeedback = () => {
//       const values = Object.values(this.state);
//       let total = 0;
//       for (const value of values) {
//         total += value;
//       }
//     return total;
//   }

//   countPositiveFeedbackPercentage = () => {
//    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { btnKey, onClick, countPositiveFeedbackPercentage } = this;
//     const totalFeedback = this.countTotalFeedback();
    
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Buttons options={btnKey} onLeaveFeedback={onClick} />
//         </Section>

//         <Section title="Statistics">
//           {totalFeedback <= 0 ? (<Notification message="There is no feedback" />) : (<Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedback}
//             feedback={countPositiveFeedbackPercentage()}
//           />)}
//         </Section>
//       </>
//     );
//   }
// }



// export default App;


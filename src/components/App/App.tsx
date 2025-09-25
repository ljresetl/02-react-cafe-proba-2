import { useState } from "react";               
import css from "./App.module.css";             
import CafeInfo from "../CafeInfo/CafeInfo";     
import VoteOptions from "../VoteOptions/VoteOptions"; 
import type { Votes, VoteType } from "../../types/votes";  
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
  // Створюємо стан votes
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для обробки голосу
  const handleVote = (type: VoteType) => {
    setVotes((prev: Votes) => ({
      ...prev,           
      [type]: prev[type] + 1, // збільшуємо лічильник обраного типу на 1
    }));
  };

  // Функція для скидання всіх голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    };

    const totalVotes = votes.good + votes.neutral + votes.bad;
   const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0
    

  return (
    <div className={css.app}>
<CafeInfo /> 
<VoteOptions
    handleVote={handleVote}
    resetVotes={resetVotes}
              votes={votes}
              canReset={totalVotes > 0}
          />
          {totalVotes > 0 ? (
              <VoteStats
                  votes={votes}
                  totalVotes={totalVotes}
                  positiveRate={positiveRate}
              />) : (
        <Notification />)}
      </div>
      
     
  );
}

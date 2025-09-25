import clsx from "clsx";
import css from "./VoteOptions.module.css";
import type { Votes, VoteType } from "../../types/votes";

interface VoteOptionsProps {
  votes: Votes;
  handleVote: (type: VoteType) => void;
  resetVotes: () => void;
  canReset?: boolean;
}

export default function VoteOptions({
  handleVote,
  resetVotes,
  canReset = true,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => handleVote("good")}>
        Гуд
      </button>
      <button className={css.button} onClick={() => handleVote("neutral")}>
        Нейтрал
      </button>
      <button className={css.button} onClick={() => handleVote("bad")}>
        Бед
      </button>
      <button
        className={clsx(css.button, canReset ? css.reset : css.reset_disable)}
        onClick={resetVotes}
        disabled={!canReset}
      >
        Скинути
      </button>
    </div>
  );
}

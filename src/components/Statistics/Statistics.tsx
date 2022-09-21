    import React from "react"
    interface IProp{
      good: number,
      neutral: number,
      bad: number,
      total: number,
      percentage: number
    }


      export const Statistics = ({good, neutral, bad, total, percentage}: IProp):JSX.Element => <div>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{percentage}%</p>
      </div>
import React, { useEffect, useState } from 'react';

export const LegSlip = ({player, goal}) => {
  console.log(goal)
  // ID specifies a target from 1 to 6, for disposal targets, we need to adjust these
  const disposalTargets = [15, 20, 25, 30, 35, 40]
  const target = (goal[0] === "g") ? goal[1] : disposalTargets[goal[1] - 1]

  return(
    <>
      <div className="leg-slip">
        {player + " for " + target + "+" + (goal[0] === "d" ? " disposals" : " goals")}
      </div>
    </>
  )
}
import React from 'react'
import { connect } from 'react-redux'
import './Kakuro.css'
import { flatten, map2d } from '../util';

import Kaksquare from './Kaksquare'
import ValSquare from './ValSquare'

const Kakuro = ({solution, labels, boardSize}) => (
  <div className="Kakuro">
    { flatten(map2d(
        solution,
        (val, x, y) => {
          const label = labels[y][x]
          const style = {
            gridColumn: x+1,
            gridRow: y+1,
          }
          return (val !== undefined) ? (
            <ValSquare
              value={val}
              style={style} />
          ) : (
            <Kaksquare
              rightNum={label.rightNum}
              downNum={label.downNum}
              style={style} />
          )
        }
    )) }
  </div>
)

const stateToProps = (state) => state

export default connect(
  stateToProps
)(Kakuro)

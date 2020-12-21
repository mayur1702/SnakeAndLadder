import React, {Component} from 'react';
import './Board.scss';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {size: 10}
    }
    render(){
        let rows = [];
        for (var i = 10; i >= 1; i--){
            let rowID = `row${i}`
            let cell = []
            for (var idx = 1; idx <= 10; idx++){
                let cellID = `cell${i}-${idx}`
                cell.push(<td key={cellID} id={cellID}>{idx}</td>)
            }
            rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return(
            <div className="board-wrap">
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    };
}
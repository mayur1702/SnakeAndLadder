import React, {Component} from 'react';
import './Board.scss';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {size: 10}
    }
    render(){
        let rows = [];
        for (var i = this.state.size; i >= 1; i--){
            let rowID = `row${i}`;
            let cell = [];
            if(i % 2 != 0){
                for (var idx = 1; idx <= this.state.size; idx++){
                    let cellID = `cell${i}-${idx}`;
                    let cellNum = idx + (i - 1) * 10;
                    cell.push(<td key={cellID} id={cellID}>{cellNum}</td>)
                }
            }
            else{
                for (var idx = this.state.size; idx >= 1; idx--){
                    let cellID = `cell${i}-${idx}`;
                    let cellNum = idx + (i - 1) * 10;
                    cell.push(<td key={cellID} id={cellID}>{cellNum}</td>)
                }
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
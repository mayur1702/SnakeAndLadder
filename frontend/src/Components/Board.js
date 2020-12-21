import React, {Component} from 'react';
import './Board.scss';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {size: 10}
    }
    render(){
        let grid = []
        let count = 10;
        let flag = true;
        let step = 80;
        for(let i = 100;i > 0; i--) {
            if(flag) {
                count--;
                grid.push(<div className="grid" key={i}>{i}</div>)
            } else {
                count++;
                grid.push(<div className="grid" key={i}>{step+count}</div>)
            }
            if(count == 0) flag = false;
            if(count == 10) {
                flag = true;
                step -= 20;
            }
        }
        return(
            <div className="board-wrap">{grid}</div>
        )
    };
}
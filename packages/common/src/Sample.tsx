import * as React from 'react';
import Moment from "moment";

type Props= {};
type State = {};
export default class Sample extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
    }

    render():React.ReactElement{
        return(
        <div>{Moment().format()}</div>
        );
    }
}
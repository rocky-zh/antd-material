import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
export default class App extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    API
                </Typography>
                <p style={{margin:'12px 0 30px 0'}}>时间轴</p>
            </div>
        )
    }
}
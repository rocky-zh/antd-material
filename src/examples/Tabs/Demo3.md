#  图标
## 有图标的标签。

````jsx
import Tab from '@/components/Tabs'
import Icon from '@/components/Icon'
const Tabs = Tab.Tabs
export class Demo3md extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0,
                selectnum: 0
            };
        }
    
        handleChange = (event, value) => {
            this.setState({value, selectnum: value});
    
        };

    render() {
        const {classes, theme} = this.props;
                const {value} = this.state;
                return (
                    <div>
                        <Tabs value={value} onChange={this.handleChange} selectnum={this.state.selectnum}
                              indicatorColor="primary"
                              textColor="primary">
                            <Tab label="Tab1" icon={<i className="fa fa-apple" />}>
                                <div>
                                    我是Tab1的内容
                                </div>
                            </Tab>
                            <Tab label="disabled" icon={<i className="fa fa-android"/>}>
                                <div>
                                    我是Tab2的内容
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                )
    }
}
````
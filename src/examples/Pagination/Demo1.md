#  基本
## 页码比较少的情况的分页。


````jsx
import Pagination from '@/components/Pagination'

export class <%=component%> extends Component {
    render() {
        return (
            <Pagination defaultCurrent={3} total={50} />
        )
    }
}
````
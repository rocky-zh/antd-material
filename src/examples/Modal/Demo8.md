#  手动移除
##手动关闭modal。

````jsx
import Modal from '@/components/Modal'
import Button from '@/components/Button'

export class <%=component%> extends Component {
     success() {
       const modal = Modal.success({
         title: 'This is a notification message',
         content: 'This modal will be destroyed after 3 second',
       });
       setTimeout(() => modal.destroy(), 3000);
     }
       render() {
         return (
           <div>
                <Button onClick={this.success}>Success</Button>
             </div>
         );
       }
}
````
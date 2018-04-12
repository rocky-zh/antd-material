import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Anchor from '@/components/Anchor'
import Link from '@/components/Anchor/Link'




export class Demo1md extends Component {
    render() {
        return (
            <div style={{padding:'0 150px'}}>
                <div style={{position:'absolute',left:15}}>
                    <Anchor target={()=>document.getElementsByTagName('main')[0]} offsetTop={400} fixTop={64}>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
                <div style={{position:'absolute',right:15}}>
                    <Anchor target={()=>document.getElementsByTagName('main')[0]} affix={false} offsetTop={400}>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
                <div id="components-anchor-demo-basic" style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                    <span style={{lineHeight: '360px'}}>components-anchor-demo-basic</span>
                </div>
                <div id="components-anchor-demo-fixed" style={{height:'360px',color:'#1890ff',background:'#fff'}}>
                    <span style={{lineHeight: '360px'}}>components-anchor-demo-fixed</span>
                </div>
                <div id="API">
                    <div  style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                        <span style={{lineHeight: '360px'}}>API</span>
                    </div>
                    <div id="Anchor-Props" style={{height:'360px',color:'#1890ff',background:'#fff'}}>
                        <span style={{lineHeight: '360px'}}>Anchor-Props</span>
                    </div>
                    <div id="Link-Props" style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                        <span style={{lineHeight: '360px'}}>Link-Props</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      两种使用方法:基本,静态位置
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     浮动和不浮动，状态不随页面滚动变化。
                                </p>
                    <Templete code={`import Anchor from '@/components/Anchor'
import Link from '@/components/Anchor/Link'

export class Demo1md extends Component {
    render() {
        return (
            <div style={{padding:'0 150px'}}>
                <div style={{position:'absolute',left:15}}>
                    <Anchor target={()=>document.getElementsByTagName('main')[0]} offsetTop={400} fixTop={64}>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
                <div style={{position:'absolute',right:15}}>
                    <Anchor target={()=>document.getElementsByTagName('main')[0]} affix={false} offsetTop={400}>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
                <div id="components-anchor-demo-basic" style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                    <span style={{lineHeight: '360px'}}>components-anchor-demo-basic</span>
                </div>
                <div id="components-anchor-demo-fixed" style={{height:'360px',color:'#1890ff',background:'#fff'}}>
                    <span style={{lineHeight: '360px'}}>components-anchor-demo-fixed</span>
                </div>
                <div id="API">
                    <div  style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                        <span style={{lineHeight: '360px'}}>API</span>
                    </div>
                    <div id="Anchor-Props" style={{height:'360px',color:'#1890ff',background:'#fff'}}>
                        <span style={{lineHeight: '360px'}}>Anchor-Props</span>
                    </div>
                    <div id="Link-Props" style={{height:'360px',color:'#fff',background:'#1890ff'}}>
                        <span style={{lineHeight: '360px'}}>Link-Props</span>
                    </div>
                </div>
            </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}
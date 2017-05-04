import * as React from 'react';

import {Items,Item,Row,Col,Table,Code} from 'yrui';


let thead=['ID','参数','说明','类型','可选值','默认值'];
let brand=[{
  key:'logo',
  expr:'是否在brand上显示logo',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'title',
  expr:'标题',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'subtitle',
  expr:'副标题',
  type:'string',
  values:'-',
  default:'-'
}];
let nav=[{
  key:'login',
  expr:'用户登录信息',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'hideRightTogbar',
  expr:'是否显示右侧边栏切换按钮',
  type:'boolean',
  values:'true/false',
  default:'false'
},{
  key:'dropList',
  expr:'头部显示内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'dropList.leftList',
  expr:'头部左侧内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'dropList.rightList',
  expr:'头部右侧内容',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'dropList.searchFlag',
  expr:'是否显示搜索框',
  type:'boolean',
  values:'true/false',
  default:'false'
}];
let droplist=[{
  key:'name',
  expr:'下拉菜单名',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'icon',
  expr:'下拉菜单图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'img',
  expr:'下拉菜单图标',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'animate',
  expr:'下拉菜单动画',
  type:'string',
  values:'up/down/left/right',
  default:'up'
},{
  key:'msg',
  expr:'下拉菜单消息提示',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'items',
  expr:'下拉菜单内容',
  type:'object',
  values:'-',
  default:'-'
}];

const t=`import {Head,Nav,Brand} from 'yrui';
  
  <Head>
    <Brand title="React" subtitle="UI Demo" logo={require('../../styles/images/usr.jpg')} />
    <Nav dropList={dropList} hideRightTogbar={false} login={login} />
  </Head>
  
  // dropList
  export const dropList={
    searchFlag:true,
    leftList:[{
      name:'theme',
      icon:'cog',
      animate:'up',
      open:'',
      items:['头部','LOGO','侧边栏','选中']
    }],
    rightList:[{
      name:'API',
      icon:'book',
      href:'#/api',
    },{
      name:'profile',
      img:require('../styles/images/usr.jpg'),
      icon:'user',
      animate:'right',
      msg:'4',
      open:'',
      items:[{
        pic:'用',
        h4:'用户信息',
        p:'',
        icon:'weixin',
      },{
        pic:'消',
        h4:'消息',
        p:'',
        icon:'weixin',
      },{
        pic:'设',
        h4:'设置',
        p:'',
        icon:'weixin',
      },{
        pic:'退',
        h4:'退出',
        p:'',
        url:'user/login',
        icon:'weixin',
      }]
    }]
  };
`;

export default class HeadDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <div className="textarea">
            <h2>Phoenix UI</h2>
            <p>Phoenix UI是一套用于快速开发web应用的UI框架。</p>
            <p>Phoenix UI使用Typescript编写，提供一些简单UI组件及函数库。拓展性强，可配合其它一些组件或插件进行开发，如ant design、jquery等。</p>
            <h2>路由配置</h2>
            <p>本框架采用html5的popstate来控制路由切换，配置方便，便于同构。</p>
            <Code title="demo" code={t} />
          </div>
          <Row gutter={12}>
            <Col span={6}>
              <h2>barnd配置</h2>
              <Table thead={thead} tbody={brand} />
            </Col>
            <Col span={6}>
              <h2>nav配置</h2>
              <Table thead={thead} tbody={nav} />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row gutter={12}>
            <h2>droplist配置</h2>
            <Table thead={thead} tbody={droplist} noBorder={true} />
          </Row>
        </Item>
      </Items>
    )
  };
}
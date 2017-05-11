import * as React from 'react';

import {Row,Col,Items,Item,Table,Button,Badge,Textarea,Code} from 'yrui';

let thead=['ID','参数','说明','类型','可选值','默认值'];
let badge=[{
  key:'style',
  expr:'badge样式',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'text',
  expr:'badge文本',
  type:'string',
  values:'-',
  default:'-'
},{
  key:'showBadge',
  expr:'是否显示Badge',
  type:'boolean',
  values:'true/false',
  default:'true'
}];

let textarea=[{
  key:'style',
  expr:'样式',
  type:'object',
  values:'-',
  default:'-'
},{
  key:'placeholder',
  expr:'提示文本',
  type:'string',
  values:'-',
  default:'-'
}];

const t=`<Badge text="3">
    <Button color="info" text="测试" />
  </Badge>
`;
const t1=`<Textarea placeholder="test" />
`;

export default class CodeDemo extends React.Component<any,any> {

  render() {
    return (
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <Badge text="3">
                <Button color="info" text="测试" />
              </Badge>
            </Col>
            <Col span={6} sm={12}>
              <Textarea placeholder="test" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <div className="textarea">
                <h4>代码示例</h4>
                <Code title="demo" code={t} />
              </div>
            </Col>
            <Col span={6} sm={12}>
              <div className="textarea">
                <h4>代码示例</h4>
                <Code title="demo" code={t1} />
              </div>
            </Col>
          </Row>
        </Item>
        <Item>
          <Row gutter={12}>
            <Col span={6} sm={12}>
              <h2>badge配置</h2>
              <Table thead={thead} tbody={badge} />
            </Col>
            <Col span={6} sm={12}>
              <h2>textarea配置</h2>
              <Table thead={thead} tbody={textarea} />
            </Col>
          </Row>
        </Item>
      </Items>
    )
  };
}

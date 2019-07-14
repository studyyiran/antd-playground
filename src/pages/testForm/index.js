import React from 'react'
import {Form, Input} from 'antd'
import {Button} from 'antd'
import Footer from "../../components/zao/footer";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testConsole = this.testConsole.bind(this);
    this.input = React.createRef();
  }

  a = () => {
    console.log('a')
  }


  testConsole() {
    console.log(Date.now())
  }

  handleSubmit(event) {
    console.log(event.target[0].value)
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default function () {
  const testRef1 = React.createRef()
  const testRef2 = React.createRef()
  console.log('enter!')
  testJieYong()
  return <div>
    <div ref={testRef2} onClick={() => {
      console.log(testRef1.current)
      console.log(testRef2.current)
      testRef1.current.a()
      // testRef.current.testConsole()
    }
    }>test me</div>
    {/*<NativeForm />*/}
    <NameForm ref={testRef1}/>
    {/*<AntdForm />*/}
  </div>
}

function NativeForm() {
  return <div>
    123
    <form id="test" action="http://localhost:3000/testRouter" method="get">
      <input required />
      <button type="submit">submit</button>
    </form>
    <form>
      <label>
        Name123:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <button form="test"></button>
  </div>
}

function submitHandler(e) {
  console.log(e);
  const form = e.target;
  [].slice.call(form).forEach((item) => {
    const {type, value, tagName} = item
    console.log(type)
    console.log(value)
    console.log(tagName)
  })
  e.preventDefault()
}

function testJieYong() {
  const a = {
    name: 'a',
    log: function () {
      console.log('log')
      console.log(this.name)
    }
  }
  const b = {
    name: 'b'
  }
  a.log.call(b)
  // b.call(a).log()
}


function AntdForm () {

  return <div>
    <Form onSubmit={submitHandler}>
      <input name={'a'} />
      <Input />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  </div>
}
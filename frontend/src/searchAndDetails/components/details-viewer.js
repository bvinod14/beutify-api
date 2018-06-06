import React, { Component } from 'react'

class DetailsViewer extends Component {
  render () {
    let isDetailsAvailable = this.props.data && this.props.data.hasOwnProperty('request');
    return (
      <div className={`details-viewer-container ${this.props.reveal ? 'reveal' : ''}`}>
        <div className="back-button" onClick={this.props.close}>Back</div>
        {
          isDetailsAvailable && <div>
            <MainDetails data={this.props.data} />
            <FormatDetails data={this.props.data} title={'request'}/>
          </div>
        }
        {
          !isDetailsAvailable && 
          <div className="no-content-error">Sorry!! the selected API doesn't have any content to show</div>
        }
      </div>
    )
  }
}

class MainDetails extends Component{
  render(){
    let data = this.props.data;
    
    return (
      <div>
        <div className="title">
          {data.name}
        </div>
        <UrlView data={this.props.data} />
      </div>
    )
  }
}

class UrlView extends Component {
  render(){
    let data = this.props.data;
    let colorBox = { 'get': 'green-box', 'post': 'yellow-box', 'put': 'blue-box', 'delete': 'red-box' };
    let url = typeof data.request.url == 'string' ? data.request.url : data.request.url.raw;
    return (
      <div className="url-viewer">
        <div className={`url-method ${colorBox[data.request.method.toLowerCase()]}`}>
          {data.request.method}
        </div>
        <div className="actual-url">{url}</div>
      </div>
    )
  }
}


class FormatDetails extends Component {
  render(){
    let data = this.props.data[this.props.title];

    return (
      <div className="details-wrap">
        <div className="title">{this.props.title}</div>
        <div className="section">
          <div className="header3">Headers</div>
          <ul className="code">
          {
            data.header.map((header,index) => {
              return (
              <li key={index}>
                <span className="key">{header.key} : </span>
                <span>{header.value}</span>
                <span>{header.description}</span>
              </li>
              )
            })
          }
          </ul>
        </div>
        <div className="section">
          <div className="header3">Body</div>
          <div>
            <pre>
              { 
                data.body && data.body.raw &&
                <ReadableJSON data={data.body.raw} />
              }
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

function ReadableJSON(props){
  let data = props.data,
  readable = data,
  isParseable = false;
  
  try{
    readable = JSON.parse(data);
    isParseable = true;
  }catch(er){
    console.error(er);
  }

  if(isParseable) {
    readable = JSON.stringify(readable, null, 4);
  }

  return (
    <pre>
      {readable}
    </pre>
  )
}

export default DetailsViewer
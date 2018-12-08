import React from 'react'
import ReactDOM from 'react-dom'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const DogList = [
  'frenchie', 'bulldog', 'lab', 'boxer', 'pitbull', 'aussie', 'auscattle', 'azawakh', 'lifeguard'
]

const jsUcfirst = (string) =>
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Dog extends React.Component {
  render() {
    var img = DogList[this.props.id] + '.jpg'
    return (
      <React.Fragment>
        <input type="image" className="dog" src={img} onClick={this.props.selectDog} className="col-sm-10 col-md-6 col-lg-3" style={{maxWidth: '420px', marginBottom: '20px'}}>
          {/* TODO */}
        </input>
      </React.Fragment>
    );
  }
}

class DogsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        myDog: null,
    }
  }

  selectDog(i) {
    this.setState({myDog: i})
  }

  renderDog(i) {
    return <Dog id={i} selectDog={() => this.selectDog(i)}/>;
  }

  render() {
    var status = 'Current Dog: ';
    if (this.state.myDog != null) {
      status += jsUcfirst(DogList[this.state.myDog]) + '.'
    }

    return (
      <div>
        <StickyHeader
          header={<div className="status" style={{backgroundColor: 'blue'}}>{status}</div>}>
        <div style={{minHeight: '50px'}}/>
        </StickyHeader>
        <div className="row">
          {this.renderDog(0)}
          {this.renderDog(1)}
          {this.renderDog(2)}
          {this.renderDog(3)}
          {this.renderDog(4)}
          {this.renderDog(5)}
          {this.renderDog(6)}
          {this.renderDog(7)}
          {this.renderDog(8)}
        </div>
      </div>
    );
  }
}

class Site extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <DogsContainer />
        <div className="dog-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);


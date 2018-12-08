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
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(results => {
      return results.json()
    }).then(data => {
      let img = data.message
      let breed = img.split('/breeds/')[1].split('/')[0]
      this.setState({imageUrl: img, dogBreed: breed})
    })
  }

  render() {
    console.log(this.state)
    if (!this.state) {
      return (<div/>)
    }
    return (
      <React.Fragment>
        <input type="image" className="dog" src={this.state.imageUrl} onClick={() => {this.props.selectDog(this.state.dogBreed)}} className="col-sm-12 col-md-6 col-lg-4" style={{maxWidth: '100%', width: 'auto', height: 'auto', marginBottom: '20px'}}>
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

  selectDog(breed) {
    this.setState({myDog: breed})
  }

  renderDog(i) {
    return <Dog id={i} selectDog={this.selectDog.bind(this)}/>;
  }

  render() {
    console.log(this.state)
    var status = 'Current Dog: ';
    if (this.state.myDog != null) {
      status += jsUcfirst(this.state.myDog) + '.'
    }

    return (
      <div>
        <StickyHeader
          header={<div className="status" style={{backgroundColor: 'blue', color: 'white'}}>{status}</div>}>
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


import React from 'react'
import ReactDOM from 'react-dom'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import _ from 'lodash'

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
    if (! this.state) {
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
        allDogs: this.renderDogs(10),
        loading: false,
    }
  }

  componentDidMount() {
    this.refs.myscroll.addEventListener("scroll", () => {
      console.log(this.refs.myscroll)
      if (this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
          this.refs.myscroll.scrollHeight) {
        this.loadMore()
      }
    })
  }

  loadMore() {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({
        loading: false,
        allDogs: this.state.allDogs.concat(this.renderDogs(10)),
      })
    }, 500)
  }

  selectDog(breed) {
    this.setState({myDog: breed})
  }

  renderDog(i) {
    return <Dog id={i} selectDog={this.selectDog.bind(this)}/>;
  }

  renderDogs(num) {
    var dogs = []
    for (let i = 0; i < num; i++) {
      dogs.push(this.renderDog(num))
    }
    return dogs
  }

  render() {
    console.log(this)
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
        <div className="row" ref="myscroll" style={{height: '1400px', overflow: 'auto'}}>
          {this.state.allDogs}
          {this.state.loading ? <p className="App-intro">loading ...</p> : ""}
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

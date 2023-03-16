import { Component } from 'react'
class Feedback extends Component {
    state = { changeFeedback: true };
    showResult = () => {
        this.setState({
            changeFeedback: false,
        });
    };
    render() {
        const { changeFeedback } = this.state;
        const { resources } = this.props;
        const { emojis } = resources;
        return (<div className="bg-container">
            <div className="card-container">
                {changeFeedback ? (<h1 className="head-card">
                    How satisfied are you with our customer support performance?
          </h1>
                    ,
                    <ul className="list-container">
                        {emojis.map(eachItem => (<li key={eachItem.id} className="list-card">
                            <button type="button" className="btn" onClick={this.showResult}>
                                <img src={eachItem.imageUrl} alt={eachItem.name} className="image-card" />
                                <br />
                                <span className="name-card">{eachItem.name}</span>
                            </button>
                        </li>))}

                    </ul>) : (<h1>Hello</h1>)}
            </div>
        </div>);
    }
}
export default Feedback

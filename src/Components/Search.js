import React from 'react'

class Search extends React.Component {
    state = { term: '' }


    onFormChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event)=>{
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Search Videos</label>
                    <input value={this.state.term} onChange={this.onFormChange} />
                </form>
            </div>
        )
    }
}
export default Search
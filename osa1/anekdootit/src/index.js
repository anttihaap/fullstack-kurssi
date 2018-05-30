import React from 'react'
import ReactDOM from 'react-dom'

const DisplayAnecdote = (props) => {
    const { anecdote, votes } = props.anecdote
    return (
        <div>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anecdotes: props.anecdotes,
            votes: new Array(props.anecdotes.length).fill(0),
            selected: this.randomIntInRange(0, anecdotes.length - 1)
        }
        this.updateSelectedAnecdote()
    }

    updateSelectedAnecdote = () => {
        let length = anecdotes.length
        this.setState({ selected: this.randomIntInRange(0, length - 1) })
    }

    voteSelectedAnecdote = () => {
        const votes = this.state.votes
        const selected = this.state.selected
        if (votes[selected] === undefined) {
            votes[selected] = 1
        } else {
            votes[selected] = votes[selected] + 1;
        }
        this.setState({ votes: votes })
    }

    randomIntInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCurrentAnecdote = () => {
        const selected = this.state.selected
        const votes = this.state.votes[selected]
        const anecdote = this.state.anecdotes[selected];
        return ({
            anecdote: anecdote,
            votes: votes
        })
    }

    getMostVotesAnecdote = () => {
        const maxVote = Math.max.apply(null, this.state.votes)
        const anecdoteIndex = this.state.votes.indexOf(maxVote)
        return ({
            anecdote: this.state.anecdotes[anecdoteIndex],
            votes: maxVote
        })
    }

    mostVotesAnecdoteIndex = () => {
        let maxVote = Math.max.apply(null, this.state.votes)
        return this.state.votes.indexOf(maxVote)
    }

    render() {
        return (
            <div>
                <DisplayAnecdote anecdote={this.getCurrentAnecdote()} />
                <button onClick={this.voteSelectedAnecdote}>vote</button>
                <button onClick={this.updateSelectedAnecdote}>next anecdote</button>
                <DisplayAnecdote anecdote={this.getMostVotesAnecdote()} />
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
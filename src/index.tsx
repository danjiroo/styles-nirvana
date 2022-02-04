import ReactDOM from 'react-dom'

import './styles.css'

export * from './components'
export * from './applications'

const App: React.FC = () => (
  <div className='App'>
    <p>Run `yarn storybook` instead.</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

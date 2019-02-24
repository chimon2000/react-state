import React from 'react'
import ReactDOM from 'react-dom'
import AkitaApp from './akita/AkitaApp'
import MobxApp from './mst/MobxApp'
import OvermindApp from './overmind/App'

var mountNode = document.getElementById('app')
ReactDOM.render(<OvermindApp />, mountNode)

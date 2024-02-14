type Action = 
| { type: 'counter/minus'}
| { type: 'counter/plus'}
| { type: 'counter/reset' }

export default Action
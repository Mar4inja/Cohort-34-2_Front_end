type Action =
| { type: 'counter/minus10' }
| { type: 'counter/minus' }
| { type: 'counter/plus' }
| { type: 'counter/plus10' }
| { type: 'counter/reset' }
| { type: 'counter/plus10&minus10', payload: boolean }
| { type: 'counter/change', payload: number }

export default Action
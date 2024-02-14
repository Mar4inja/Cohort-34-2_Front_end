type Action = 
| { type: 'counter/minus'}
| { type: 'counter/plus'}
| { type: 'counter/reset' }
| { type: 'counter/change', payload: number}
| { type: 'counter/plus10' }
| { type: 'counter/minus10' }

export default Action




// minus 10
//plus 10  in two actions


// minus 10
//plus 10  in one action  *
type Action = 
| { type: 'counter/minus'}
| { type: 'counter/plus'}
| { type: 'counter/reset' }
| { type: 'counter/change', payload: number}
// | { type: 'counter/plus10' }
// | { type: 'counter/minus10' }                                           первый вариант с двумя action
| { type: 'counter/plusMinus10', payload: number}                          // второй вариант с одним action

export default Action



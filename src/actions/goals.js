import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

function handleAddGoal(name, callback) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        callback()
      }).catch(() => {
        alert('There was an error. Try again!')
      })
  }
}

function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))

    return API.deleteGoal(goal.id)
      .catch(() => {
        this.props.store.dispatch(addGoal(goal))
        alert('An error occurred. Try again!')
      })
  }
}
const STATE_KEY = 'STATE'

export default class StateRepository {
  static getState() {
    const jsonContent = localStorage.getItem(STATE_KEY)

    return jsonContent ? JSON.parse(jsonContent) : null
  }

  static updateState(state) {
    const jsonContent = JSON.stringify(state)

    localStorage.setItem(STATE_KEY, jsonContent)
  }
}

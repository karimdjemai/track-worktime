
export function startTimer (state) {
  state.running = true
  state.start = Date.now()
}

export function stopTimer (state) {
  state.running = false
  state.start = 0
}

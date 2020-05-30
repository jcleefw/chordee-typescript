export default class Metronome {
  context: any
  volume: number
  loopTimer: number
  isPLaying: boolean
  gainNode: any
  constructor() {
    this.context = null
    this.volume = 100
    this.loopTimer = 0
    this.isPLaying = false
  }

  init = (volume: number) => {
    console.log('hello world')
    this.context = this.getAudioContext()
    this.volume = volume
    // this.gainNode = this.context.createGain()
  }

  getAudioContext = () => {
    return 'hello'
  }
}

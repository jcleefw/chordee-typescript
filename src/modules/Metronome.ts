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
    this.context = this.getAudioContext()
    this.volume = volume

    // this.gainNode = this.context.createGain()
  }

  getAudioContext = (): AudioContext | Error => {
    let context: AudioContext
    // webkitAudioContext is old namespace of AudioContext
    if (typeof AudioContext !== 'undefined') {
      return new AudioContext()
      // } else if (typeof window.webkitAudioContext !== 'undefined') {
      //   return new window.webkitAudioContext()
    } else {
      throw new Error('Web Audio API is not supported in this browser')
    }
  }
}

import Metronome from './Metronome'

describe('Metronome', () => {
  it('when webaudio api is not supported, should throw error', () => {
    const metronome = new Metronome()

    expect(() => metronome.init(50)).toThrowError(
      'Web Audio API is not supported in this browser'
    )

    expect(() => metronome.getAudioContext()).toThrowError(
      'Web Audio API is not supported in this browser'
    )
  })
})

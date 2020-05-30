import Metronome from './Metronome'

describe('Metronome', () => {
  it('should be true', () => {
    const metronome = new Metronome()
    metronome.init(50)
    expect(metronome.context).toBe('hello')
  })
})

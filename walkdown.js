// @title Walkdown
// @by Paul Gestwicki
// @license CC BY-NC-SA
const chords = "[Dm C Bb A7]/4"

$: n(0)
  .struct("x ~ x ~ x ~ x x ~ x x ~ x x x x")
  .chord(chords)
  .mode("root:d3")
  .voicing()

$: n("[0,2,4]")
  .struct("~ x ~ x")
  .chord(chords)
  .voicing()
  .s("piano")
  .room(0.5)

$: n(irand(12).add(-6))
.struct("x!8*2").degradeBy(0.3)
.chord(chords)
.voicing()
.s("sawtooth").lpf(1800, 2000)

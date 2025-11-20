// @title Slappy
// @by Paul Gestwicki
// @licence CC BY-NC-SA
const chords = "Gm";

setcpm(128/4)

$: note("[g1 ~] ~ [g1 g1] ~")
  .s("gm_slap_bass_1")

$: note("~ [<g2 [<f#2 bb2> g2]> ~] ~ [g2 ~]")
  .gain("[0.4 1] 1")
.s("gm_slap_bass_2")

$: s("jazz!3 <jazz!3 [jazz!2]>").gain("0.7 0.5!3")
$: s("~ sd ~ sd").gain(0.4)
$: s("<cr rd!3> rd <rd!3 [cr]>!2").cut(1)

$: n("[0,2,4]").s("gm_electric_guitar_clean").chord(chords).voicing()
.struct("x ~ ~ x x ~ x ~ x ~ ~ ~ <~ x> ~ x x").gain(0.15)

$: n("[0,2,5]")
  .struct("~ <x ~> ~ ~")
  .sus(0.8)
  .s("gm_rock_organ").chord(chords).voicing()
  .gain(0.6)

$: n("<[8@3 7 8@4] <[8@3 7 8 7 6 5]!3 ~>>")
.s("gm_percussive_organ")
.chord(chords).voicing().gain(0.6)

$: n("<[14@3 13 12@4] ~>".slow(4))
  .sound("gm_synth_choir")
  .chord(chords).voicing()
  .gain(0.7)

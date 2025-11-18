// @title Squeaky Tinkering
// @by Paul Gestwicki
// @license CC BY-NC-NA
$: s("bd!4").bank("RolandTR909").gain("1 0.8!3").lpf(1000)
$: s("rim").struct("~ x")

$: n(irand(8)).struct("x!8").scale("c:minor")

$: note("c2")
  .struct("[x ~]/2")
  .sound("square").lpf(1500)

$: note("c5 d5 eb5").sound("psaltery_spiccato").clip(0.2)
.struct("x(<3 5>,8)")

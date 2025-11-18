// @title Interactive Blocks
// @by Paul Gestwicki
// @license CC BY-SA-NC
// Just an experiment to see how mousex and mousey work.
mouse_input: n(mousex.seg(8).range(0,8)).scale("c:mixolydian").gain(mousey.range(1,0.2))
.s("gm_xylophone")

drums: s("gm_woodblock:5!4").gain("1 0.7!3")
claps: s("cp:10!8").euclid(3,8).gain(0.3)
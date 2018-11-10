# `tachyons-animate`
### Single purpose classes to help you orchestrate CSS animations

I made this project to help me get more out of my animations. It's inspired by tachyons and intended to be an extension of the toolkit. There are NO animation keyframes, only single purpose classes that control:
- animation-play-state : `.pause`
- animation-iteration-count : `.infinite`, `.double`, `.triple`
- animation-direction: `.reverse`, `.alternate`, `.alternate-reverse`

## Documentation
Let's say you use [Animate.css](https://daneden.github.io/animate.css/) (not required) for your animations but you want to stagger a few animations with a delay, or you want to tweak the duration, or run it in reverse. `tachyons-animate` helps you with this.

```

Base:
	a = animation duration
	d = animation delay

Modifiers
	1 = 1st step (150ms)
	2 = 2nd step (300ms)
	3 = 3rd step (450ms)
	4 = 4th step (600ms)
	5 = 5th step (750ms)
	6 = 6th step (900ms)

	-1 = literal value 1s
	-2 = literal value 2s
	-3 = literal value 3s
 ```

To add a 300ms delay to an element's animation, you'd simply add `.d2`. To change the duration to 400ms, add `.a4`. If you want to play it in reverse, add `.reverse`.

```HTML

<div class="animated fadeIn a4 d2 reverse"></div>
```

If the linear timing function is too boring for you, we've included additional [bezier curves](https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d) to help you out. Here's the whole list:
- `.ease`
- `.ease-in`
- `.ease-in-quad`
- `.ease-in-cubic`
- `.ease-in-quart`
- `.ease-in-quint`
- `.ease-in-expo`
- `.ease-in-circ`
- `.ease-out`
- `.ease-out-quad`
- `.ease-out-cubic`
- `.ease-out-quart`
- `.ease-out-quint`
- `.ease-out-expo`
- `.ease-out-circ`
- `.ease-in-out`
- `.ease-in-out-quad`
- `.ease-in-out-cubic`
- `.ease-in-out-quart`
- `.ease-in-out-quint`
- `.ease-in-out-expo`
- `.ease-in-out-circ`

## TODO:
- Host on CDN
- Make public NPM package

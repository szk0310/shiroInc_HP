new Vivus('mask', {//svgに指定したid名
	type: 'scenario-sync',// アニメーションのタイプを設定
	duration: 90,//アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
	forceRender: false ,//パスが更新された場合に再レンダリングさせない
	animTimingFunction:Vivus.EASE_OUT,//動きの加速減速設定
});

new Vivus('mask02', {//svgに指定したid名
	type: 'scenario-sync',// アニメーションのタイプを設定
	duration: 90,//アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
	forceRender: false ,//パスが更新された場合に再レンダリングさせない
	animTimingFunction:Vivus.EASE_OUT,//動きの加速減速設定
});
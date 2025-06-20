const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.Flash,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Plugins.Touch,
		C3.Behaviors.Sin,
		C3.Behaviors.wrap,
		C3.Plugins.TiledBg,
		C3.Behaviors.Platform,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Cnds.IsOnLayer,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.OnTapGestureObject
	];
};
self.C3_JsPropNameTable = [
	{BoundToLayout: 0},
	{Piscar: 0},
	{Player: 0},
	{Bullet: 0},
	{DestroyOutsideLayout: 0},
	{projetil_player: 0},
	{Touch: 0},
	{Health: 0},
	{Senóide: 0},
	{inimigo: 0},
	{Projetil_inimigo: 0},
	{Wrap: 0},
	{Star: 0},
	{PlanoDeFundoEmBlocos: 0},
	{hud_vida: 0},
	{Plataforma: 0},
	{powerup: 0},
	{projetil_inimigo2: 0},
	{inimigo2: 0},
	{Sprite2: 0},
	{btjogar: 0},
	{btTutorial: 0},
	{btCreditos: 0},
	{inimigo3: 0},
	{pontinhos: 0},
	{paredebloqueio: 0},
	{Mouse: 0},
	{destrocos: 0},
	{Sprite: 0},
	{tela_perdido: 0},
	{tela_creditos: 0},
	{Sprite3: 0},
	{tela_tutorial: 0},
	{historia: 0},
	{var_powerUp: 0},
	{Var_pontos: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	projetil_player: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	inimigo: class extends self.ISpriteInstance {},
	Projetil_inimigo: class extends self.ISpriteInstance {},
	Star: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	hud_vida: class extends self.ISpriteInstance {},
	powerup: class extends self.ISpriteInstance {},
	projetil_inimigo2: class extends self.ISpriteInstance {},
	inimigo2: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	btjogar: class extends self.ISpriteInstance {},
	btTutorial: class extends self.ISpriteInstance {},
	btCreditos: class extends self.ISpriteInstance {},
	inimigo3: class extends self.ISpriteInstance {},
	pontinhos: class extends self.ITextInstance {},
	paredebloqueio: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	destrocos: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	tela_perdido: class extends self.ISpriteInstance {},
	tela_creditos: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	tela_tutorial: class extends self.ISpriteInstance {},
	historia: class extends self.ISpriteInstance {}
}
if ( TRACE ) { TRACE( JSON.parse( '["ClickerGame#init","ClickerGame#Awake","ClickerGame#Start","ClickerGame#OnClickTarget","ClickerGame#TriggerWin","ClickerGame#RestartGame","ClickerGame#ResetGame","ClickerGame#UpdateUI","ClickerGame#PunchScale"]' ) ); }
/**
 * @version 1.0.9784.41229
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ClickerGame start.*/
    Bridge.define("ClickerGame", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targetClicks: 0,
            currentScore: 0,
            pointsPerClick: 0,
            scoreText: null,
            targetText: null,
            progressSlider: null,
            clickButton: null,
            buttonTransform: null,
            restartButton: null,
            originalButtonScale: null,
            punchCoroutine: null,
            isWon: false,
            lastClickTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ClickerGame#init", this ); }

                this.originalButtonScale = new UnityEngine.Vector3();
                this.targetClicks = 30;
                this.currentScore = 0;
                this.pointsPerClick = 1;
                this.isWon = false;
                this.lastClickTime = -1.0;
            }
        },
        methods: {
            /*ClickerGame.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ClickerGame#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.buttonTransform, null) && UnityEngine.MonoBehaviour.op_Inequality(this.clickButton, null)) {
                    this.buttonTransform = this.clickButton.GetComponent(UnityEngine.RectTransform);
                }

                if (UnityEngine.Component.op_Inequality(this.buttonTransform, null)) {
                    this.originalButtonScale = this.buttonTransform.localScale.$clone();
                } else {
                    this.originalButtonScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*ClickerGame.Awake end.*/

            /*ClickerGame.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ClickerGame#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.clickButton, null)) {
                    this.clickButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickTarget));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.restartButton, null)) {
                    this.restartButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.RestartGame));
                }

                this.ResetGame();
            },
            /*ClickerGame.Start end.*/

            /*ClickerGame.OnClickTarget start.*/
            OnClickTarget: function () {
if ( TRACE ) { TRACE( "ClickerGame#OnClickTarget", this ); }

                if (UnityEngine.Time.unscaledTime - this.lastClickTime < 0.05) {
                    return;
                }
                this.lastClickTime = UnityEngine.Time.unscaledTime;

                if (this.isWon) {
                    return;
                }

                this.currentScore = (this.currentScore + this.pointsPerClick) | 0;
                this.UpdateUI();

                if (UnityEngine.Component.op_Inequality(this.buttonTransform, null)) {
                    if (this.punchCoroutine != null) {
                        this.StopCoroutine$2(this.punchCoroutine);
                    }
                    this.punchCoroutine = this.StartCoroutine$1(this.PunchScale(this.buttonTransform, this.originalButtonScale, 1.25, 0.15));
                }

                if (this.currentScore >= this.targetClicks) {
                    this.TriggerWin();
                }
            },
            /*ClickerGame.OnClickTarget end.*/

            /*ClickerGame.TriggerWin start.*/
            TriggerWin: function () {
if ( TRACE ) { TRACE( "ClickerGame#TriggerWin", this ); }

                this.isWon = true;
                UnityEngine.Debug.Log$1("[ClickerGame] WIN! Target reached: " + this.currentScore);
            },
            /*ClickerGame.TriggerWin end.*/

            /*ClickerGame.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "ClickerGame#RestartGame", this ); }

                this.ResetGame();
            },
            /*ClickerGame.RestartGame end.*/

            /*ClickerGame.ResetGame start.*/
            ResetGame: function () {
if ( TRACE ) { TRACE( "ClickerGame#ResetGame", this ); }

                this.isWon = false;
                this.currentScore = 0;

                if (UnityEngine.Component.op_Inequality(this.buttonTransform, null)) {
                    this.buttonTransform.localScale = this.originalButtonScale.$clone();
                }

                this.UpdateUI();
            },
            /*ClickerGame.ResetGame end.*/

            /*ClickerGame.UpdateUI start.*/
            UpdateUI: function () {
if ( TRACE ) { TRACE( "ClickerGame#UpdateUI", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.scoreText, null)) {
                    this.scoreText.text = Bridge.toString(this.currentScore);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.targetText, null)) {
                    this.targetText.text = System.String.format("GOAL: {0} / {1}", Bridge.box(this.currentScore, System.Int32), Bridge.box(this.targetClicks, System.Int32));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.progressSlider, null)) {
                    this.progressSlider.minValue = 0;
                    this.progressSlider.maxValue = this.targetClicks;
                    this.progressSlider.value = this.currentScore;
                }
            },
            /*ClickerGame.UpdateUI end.*/

            /*ClickerGame.PunchScale start.*/
            PunchScale: function (target, normalScale, punchFactor, duration) {
if ( TRACE ) { TRACE( "ClickerGame#PunchScale", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    half,
                    elapsed,
                    maxScale,
                    t,
                    rest,
                    t1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    half = duration * 0.4;
                                        elapsed = 0.0;
                                        maxScale = normalScale.$clone().clone().scale( punchFactor );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < half ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.unscaledDeltaTime;
                                        t = elapsed / half;
                                        target.localScale = new pc.Vec3().lerp( normalScale, maxScale, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    elapsed = 0.0;
                                        rest = duration - half;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed < rest ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed += UnityEngine.Time.unscaledDeltaTime;
                                        t1 = elapsed / rest;
                                        target.localScale = new pc.Vec3().lerp( maxScale, normalScale, t1 );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    target.localScale = normalScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ClickerGame.PunchScale end.*/


        }
    });
    /*ClickerGame end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI","TMPro"];

    /*ClickerGame start.*/
    $m("ClickerGame", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnClickTarget","t":8,"sn":"OnClickTarget","rt":$n[0].Void},{"a":1,"n":"PunchScale","t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"normalScale","pt":$n[1].Vector3,"ps":1},{"n":"punchFactor","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"PunchScale","rt":$n[2].IEnumerator,"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":1,"n":"ResetGame","t":8,"sn":"ResetGame","rt":$n[0].Void},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TriggerWin","t":8,"sn":"TriggerWin","rt":$n[0].Void},{"a":1,"n":"UpdateUI","t":8,"sn":"UpdateUI","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonTransform","t":4,"rt":$n[1].RectTransform,"sn":"buttonTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickButton","t":4,"rt":$n[3].Button,"sn":"clickButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentScore","t":4,"rt":$n[0].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isWon","t":4,"rt":$n[0].Boolean,"sn":"isWon","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastClickTime","t":4,"rt":$n[0].Single,"sn":"lastClickTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalButtonScale","t":4,"rt":$n[1].Vector3,"sn":"originalButtonScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointsPerClick","t":4,"rt":$n[0].Int32,"sn":"pointsPerClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressSlider","t":4,"rt":$n[3].Slider,"sn":"progressSlider"},{"a":1,"n":"punchCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"punchCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"restartButton","t":4,"rt":$n[3].Button,"sn":"restartButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreText","t":4,"rt":$n[4].TMP_Text,"sn":"scoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetClicks","t":4,"rt":$n[0].Int32,"sn":"targetClicks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetText","t":4,"rt":$n[4].TMP_Text,"sn":"targetText"}]}; }, $n);
    /*ClickerGame end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});

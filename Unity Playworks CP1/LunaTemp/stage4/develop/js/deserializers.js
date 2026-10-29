var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointSpring' )
  var i411 = data
  i410.spring = i411[0]
  i410.damper = i411[1]
  i410.targetPosition = i411[2]
  return i410
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointMotor' )
  var i413 = data
  i412.m_TargetVelocity = i413[0]
  i412.m_Force = i413[1]
  i412.m_FreeSpin = i413[2]
  return i412
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointLimits' )
  var i415 = data
  i414.m_Min = i415[0]
  i414.m_Max = i415[1]
  i414.m_Bounciness = i415[2]
  i414.m_BounceMinVelocity = i415[3]
  i414.m_ContactDistance = i415[4]
  i414.minBounce = i415[5]
  i414.maxBounce = i415[6]
  return i414
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointDrive' )
  var i417 = data
  i416.m_PositionSpring = i417[0]
  i416.m_PositionDamper = i417[1]
  i416.m_MaximumForce = i417[2]
  i416.m_UseAcceleration = i417[3]
  return i416
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i419 = data
  i418.m_Spring = i419[0]
  i418.m_Damper = i419[1]
  return i418
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i421 = data
  i420.m_Limit = i421[0]
  i420.m_Bounciness = i421[1]
  i420.m_ContactDistance = i421[2]
  return i420
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i423 = data
  i422.m_ExtremumSlip = i423[0]
  i422.m_ExtremumValue = i423[1]
  i422.m_AsymptoteSlip = i423[2]
  i422.m_AsymptoteValue = i423[3]
  i422.m_Stiffness = i423[4]
  return i422
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i425 = data
  i424.m_LowerAngle = i425[0]
  i424.m_UpperAngle = i425[1]
  return i424
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i427 = data
  i426.m_MotorSpeed = i427[0]
  i426.m_MaximumMotorTorque = i427[1]
  return i426
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i429 = data
  i428.m_DampingRatio = i429[0]
  i428.m_Frequency = i429[1]
  i428.m_Angle = i429[2]
  return i428
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i431 = data
  i430.m_LowerTranslation = i431[0]
  i430.m_UpperTranslation = i431[1]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i432 = root || new pc.UnityMaterial()
  var i433 = data
  i432.name = i433[0]
  request.r(i433[1], i433[2], 0, i432, 'shader')
  i432.renderQueue = i433[3]
  i432.enableInstancing = !!i433[4]
  var i435 = i433[5]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i435[i + 0]) );
  }
  i432.floatParameters = i434
  var i437 = i433[6]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i437[i + 0]) );
  }
  i432.colorParameters = i436
  var i439 = i433[7]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i439[i + 0]) );
  }
  i432.vectorParameters = i438
  var i441 = i433[8]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i441[i + 0]) );
  }
  i432.textureParameters = i440
  var i443 = i433[9]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i443[i + 0]) );
  }
  i432.materialFlags = i442
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i447 = data
  i446.name = i447[0]
  i446.value = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i451 = data
  i450.name = i451[0]
  i450.value = new pc.Color(i451[1], i451[2], i451[3], i451[4])
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i455 = data
  i454.name = i455[0]
  i454.value = new pc.Vec4( i455[1], i455[2], i455[3], i455[4] )
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i459 = data
  i458.name = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'value')
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i463 = data
  i462.name = i463[0]
  i462.enabled = !!i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i465 = data
  i464.name = i465[0]
  i464.width = i465[1]
  i464.height = i465[2]
  i464.mipmapCount = i465[3]
  i464.anisoLevel = i465[4]
  i464.filterMode = i465[5]
  i464.hdr = !!i465[6]
  i464.format = i465[7]
  i464.wrapMode = i465[8]
  i464.alphaIsTransparency = !!i465[9]
  i464.alphaSource = i465[10]
  i464.graphicsFormat = i465[11]
  i464.sRGBTexture = !!i465[12]
  i464.desiredColorSpace = i465[13]
  i464.wrapU = i465[14]
  i464.wrapV = i465[15]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i467 = data
  i466.name = i467[0]
  i466.index = i467[1]
  i466.startup = !!i467[2]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i469 = data
  i468.aspect = i469[0]
  i468.orthographic = !!i469[1]
  i468.orthographicSize = i469[2]
  i468.backgroundColor = new pc.Color(i469[3], i469[4], i469[5], i469[6])
  i468.nearClipPlane = i469[7]
  i468.farClipPlane = i469[8]
  i468.fieldOfView = i469[9]
  i468.depth = i469[10]
  i468.clearFlags = i469[11]
  i468.cullingMask = i469[12]
  i468.rect = i469[13]
  request.r(i469[14], i469[15], 0, i468, 'targetTexture')
  i468.usePhysicalProperties = !!i469[16]
  i468.focalLength = i469[17]
  i468.sensorSize = new pc.Vec2( i469[18], i469[19] )
  i468.lensShift = new pc.Vec2( i469[20], i469[21] )
  i468.gateFit = i469[22]
  i468.commandBufferCount = i469[23]
  i468.cameraType = i469[24]
  i468.enabled = !!i469[25]
  return i468
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i471 = data
  i470.m_RenderShadows = !!i471[0]
  i470.m_RequiresDepthTextureOption = i471[1]
  i470.m_RequiresOpaqueTextureOption = i471[2]
  i470.m_CameraType = i471[3]
  var i473 = i471[4]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 1, i472, '')
  }
  i470.m_Cameras = i472
  i470.m_RendererIndex = i471[5]
  i470.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i471[6] )
  request.r(i471[7], i471[8], 0, i470, 'm_VolumeTrigger')
  i470.m_VolumeFrameworkUpdateModeOption = i471[9]
  i470.m_RenderPostProcessing = !!i471[10]
  i470.m_Antialiasing = i471[11]
  i470.m_AntialiasingQuality = i471[12]
  i470.m_StopNaN = !!i471[13]
  i470.m_Dithering = !!i471[14]
  i470.m_ClearDepth = !!i471[15]
  i470.m_AllowXRRendering = !!i471[16]
  i470.m_AllowHDROutput = !!i471[17]
  i470.m_UseScreenCoordOverride = !!i471[18]
  i470.m_ScreenSizeOverride = new pc.Vec4( i471[19], i471[20], i471[21], i471[22] )
  i470.m_ScreenCoordScaleBias = new pc.Vec4( i471[23], i471[24], i471[25], i471[26] )
  i470.m_RequiresDepthTexture = !!i471[27]
  i470.m_RequiresColorTexture = !!i471[28]
  i470.m_Version = i471[29]
  i470.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i471[30], i470.m_TaaSettings)
  return i470
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i477 = data
  i476.m_Quality = i477[0]
  i476.m_FrameInfluence = i477[1]
  i476.m_JitterScale = i477[2]
  i476.m_MipBias = i477[3]
  i476.m_VarianceClampScale = i477[4]
  i476.m_ContrastAdaptiveSharpening = i477[5]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i479 = data
  i478.name = i479[0]
  i478.tagId = i479[1]
  i478.enabled = !!i479[2]
  i478.isStatic = !!i479[3]
  i478.layer = i479[4]
  return i478
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'm_FirstSelected')
  i480.m_sendNavigationEvents = !!i481[2]
  i480.m_DragThreshold = i481[3]
  return i480
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i483 = data
  i482.m_HorizontalAxis = i483[0]
  i482.m_VerticalAxis = i483[1]
  i482.m_SubmitButton = i483[2]
  i482.m_CancelButton = i483[3]
  i482.m_InputActionsPerSecond = i483[4]
  i482.m_RepeatDelay = i483[5]
  i482.m_ForceModuleActive = !!i483[6]
  i482.m_SendPointerHoverToParent = !!i483[7]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i485 = data
  i484.pivot = new pc.Vec2( i485[0], i485[1] )
  i484.anchorMin = new pc.Vec2( i485[2], i485[3] )
  i484.anchorMax = new pc.Vec2( i485[4], i485[5] )
  i484.sizeDelta = new pc.Vec2( i485[6], i485[7] )
  i484.anchoredPosition3D = new pc.Vec3( i485[8], i485[9], i485[10] )
  i484.rotation = new pc.Quat(i485[11], i485[12], i485[13], i485[14])
  i484.scale = new pc.Vec3( i485[15], i485[16], i485[17] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i487 = data
  i486.planeDistance = i487[0]
  i486.referencePixelsPerUnit = i487[1]
  i486.isFallbackOverlay = !!i487[2]
  i486.renderMode = i487[3]
  i486.renderOrder = i487[4]
  i486.sortingLayerName = i487[5]
  i486.sortingOrder = i487[6]
  i486.scaleFactor = i487[7]
  request.r(i487[8], i487[9], 0, i486, 'worldCamera')
  i486.overrideSorting = !!i487[10]
  i486.pixelPerfect = !!i487[11]
  i486.targetDisplay = i487[12]
  i486.overridePixelPerfect = !!i487[13]
  i486.enabled = !!i487[14]
  return i486
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i489 = data
  i488.m_UiScaleMode = i489[0]
  i488.m_ReferencePixelsPerUnit = i489[1]
  i488.m_ScaleFactor = i489[2]
  i488.m_ReferenceResolution = new pc.Vec2( i489[3], i489[4] )
  i488.m_ScreenMatchMode = i489[5]
  i488.m_MatchWidthOrHeight = i489[6]
  i488.m_PhysicalUnit = i489[7]
  i488.m_FallbackScreenDPI = i489[8]
  i488.m_DefaultSpriteDPI = i489[9]
  i488.m_DynamicPixelsPerUnit = i489[10]
  i488.m_PresetInfoIsWorld = !!i489[11]
  return i488
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i491 = data
  i490.m_IgnoreReversedGraphics = !!i491[0]
  i490.m_BlockingObjects = i491[1]
  i490.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i491[2] )
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i493 = data
  i492.cullTransparentMesh = !!i493[0]
  return i492
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.Image' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_Sprite')
  i494.m_Type = i495[2]
  i494.m_PreserveAspect = !!i495[3]
  i494.m_FillCenter = !!i495[4]
  i494.m_FillMethod = i495[5]
  i494.m_FillAmount = i495[6]
  i494.m_FillClockwise = !!i495[7]
  i494.m_FillOrigin = i495[8]
  i494.m_UseSpriteMesh = !!i495[9]
  i494.m_PixelsPerUnitMultiplier = i495[10]
  request.r(i495[11], i495[12], 0, i494, 'm_Material')
  i494.m_Maskable = !!i495[13]
  i494.m_Color = new pc.Color(i495[14], i495[15], i495[16], i495[17])
  i494.m_RaycastTarget = !!i495[18]
  i494.m_RaycastPadding = new pc.Vec4( i495[19], i495[20], i495[21], i495[22] )
  return i494
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i496 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i497 = data
  i496.m_hasFontAssetChanged = !!i497[0]
  request.r(i497[1], i497[2], 0, i496, 'm_baseMaterial')
  i496.m_maskOffset = new pc.Vec4( i497[3], i497[4], i497[5], i497[6] )
  i496.m_text = i497[7]
  i496.m_isRightToLeft = !!i497[8]
  request.r(i497[9], i497[10], 0, i496, 'm_fontAsset')
  request.r(i497[11], i497[12], 0, i496, 'm_sharedMaterial')
  var i499 = i497[13]
  var i498 = []
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 2, i498, '')
  }
  i496.m_fontSharedMaterials = i498
  request.r(i497[14], i497[15], 0, i496, 'm_fontMaterial')
  var i501 = i497[16]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 2, i500, '')
  }
  i496.m_fontMaterials = i500
  i496.m_fontColor32 = UnityEngine.Color32.ConstructColor(i497[17], i497[18], i497[19], i497[20])
  i496.m_fontColor = new pc.Color(i497[21], i497[22], i497[23], i497[24])
  i496.m_enableVertexGradient = !!i497[25]
  i496.m_colorMode = i497[26]
  i496.m_fontColorGradient = request.d('TMPro.VertexGradient', i497[27], i496.m_fontColorGradient)
  request.r(i497[28], i497[29], 0, i496, 'm_fontColorGradientPreset')
  request.r(i497[30], i497[31], 0, i496, 'm_spriteAsset')
  i496.m_tintAllSprites = !!i497[32]
  request.r(i497[33], i497[34], 0, i496, 'm_StyleSheet')
  i496.m_TextStyleHashCode = i497[35]
  i496.m_overrideHtmlColors = !!i497[36]
  i496.m_faceColor = UnityEngine.Color32.ConstructColor(i497[37], i497[38], i497[39], i497[40])
  i496.m_fontSize = i497[41]
  i496.m_fontSizeBase = i497[42]
  i496.m_fontWeight = i497[43]
  i496.m_enableAutoSizing = !!i497[44]
  i496.m_fontSizeMin = i497[45]
  i496.m_fontSizeMax = i497[46]
  i496.m_fontStyle = i497[47]
  i496.m_HorizontalAlignment = i497[48]
  i496.m_VerticalAlignment = i497[49]
  i496.m_textAlignment = i497[50]
  i496.m_characterSpacing = i497[51]
  i496.m_characterHorizontalScale = i497[52]
  i496.m_wordSpacing = i497[53]
  i496.m_lineSpacing = i497[54]
  i496.m_lineSpacingMax = i497[55]
  i496.m_paragraphSpacing = i497[56]
  i496.m_charWidthMaxAdj = i497[57]
  i496.m_TextWrappingMode = i497[58]
  i496.m_wordWrappingRatios = i497[59]
  i496.m_overflowMode = i497[60]
  request.r(i497[61], i497[62], 0, i496, 'm_linkedTextComponent')
  request.r(i497[63], i497[64], 0, i496, 'parentLinkedComponent')
  i496.m_enableKerning = !!i497[65]
  var i503 = i497[66]
  var i502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i503.length; i += 1) {
    i502.add(i503[i + 0]);
  }
  i496.m_ActiveFontFeatures = i502
  i496.m_enableExtraPadding = !!i497[67]
  i496.checkPaddingRequired = !!i497[68]
  i496.m_isRichText = !!i497[69]
  i496.m_parseCtrlCharacters = !!i497[70]
  i496.m_isOrthographic = !!i497[71]
  i496.m_isCullingEnabled = !!i497[72]
  i496.m_horizontalMapping = i497[73]
  i496.m_verticalMapping = i497[74]
  i496.m_uvLineOffset = i497[75]
  i496.m_geometrySortingOrder = i497[76]
  i496.m_IsTextObjectScaleStatic = !!i497[77]
  i496.m_VertexBufferAutoSizeReduction = !!i497[78]
  i496.m_useMaxVisibleDescender = !!i497[79]
  i496.m_pageToDisplay = i497[80]
  i496.m_margin = new pc.Vec4( i497[81], i497[82], i497[83], i497[84] )
  i496.m_isUsingLegacyAnimationComponent = !!i497[85]
  i496.m_isVolumetricText = !!i497[86]
  request.r(i497[87], i497[88], 0, i496, 'm_Material')
  i496.m_EmojiFallbackSupport = !!i497[89]
  i496.m_Maskable = !!i497[90]
  i496.m_Color = new pc.Color(i497[91], i497[92], i497[93], i497[94])
  i496.m_RaycastTarget = !!i497[95]
  i496.m_RaycastPadding = new pc.Vec4( i497[96], i497[97], i497[98], i497[99] )
  return i496
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i506 = root || request.c( 'TMPro.VertexGradient' )
  var i507 = data
  i506.topLeft = new pc.Color(i507[0], i507[1], i507[2], i507[3])
  i506.topRight = new pc.Color(i507[4], i507[5], i507[6], i507[7])
  i506.bottomLeft = new pc.Color(i507[8], i507[9], i507[10], i507[11])
  i506.bottomRight = new pc.Color(i507[12], i507[13], i507[14], i507[15])
  return i506
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Slider' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'm_FillRect')
  request.r(i511[2], i511[3], 0, i510, 'm_HandleRect')
  i510.m_Direction = i511[4]
  i510.m_MinValue = i511[5]
  i510.m_MaxValue = i511[6]
  i510.m_WholeNumbers = !!i511[7]
  i510.m_Value = i511[8]
  i510.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i511[9], i510.m_OnValueChanged)
  i510.m_Navigation = request.d('UnityEngine.UI.Navigation', i511[10], i510.m_Navigation)
  i510.m_Transition = i511[11]
  i510.m_Colors = request.d('UnityEngine.UI.ColorBlock', i511[12], i510.m_Colors)
  i510.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i511[13], i510.m_SpriteState)
  i510.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i511[14], i510.m_AnimationTriggers)
  i510.m_Interactable = !!i511[15]
  request.r(i511[16], i511[17], 0, i510, 'm_TargetGraphic')
  return i510
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i513 = data
  i512.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i513[0], i512.m_PersistentCalls)
  return i512
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i515 = data
  var i517 = i515[0]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i517.length; i += 1) {
    i516.add(request.d('UnityEngine.Events.PersistentCall', i517[i + 0]));
  }
  i514.m_Calls = i516
  return i514
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_Target')
  i520.m_TargetAssemblyTypeName = i521[2]
  i520.m_MethodName = i521[3]
  i520.m_Mode = i521[4]
  i520.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i521[5], i520.m_Arguments)
  i520.m_CallState = i521[6]
  return i520
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i523 = data
  i522.m_Mode = i523[0]
  i522.m_WrapAround = !!i523[1]
  request.r(i523[2], i523[3], 0, i522, 'm_SelectOnUp')
  request.r(i523[4], i523[5], 0, i522, 'm_SelectOnDown')
  request.r(i523[6], i523[7], 0, i522, 'm_SelectOnLeft')
  request.r(i523[8], i523[9], 0, i522, 'm_SelectOnRight')
  return i522
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i525 = data
  i524.m_NormalColor = new pc.Color(i525[0], i525[1], i525[2], i525[3])
  i524.m_HighlightedColor = new pc.Color(i525[4], i525[5], i525[6], i525[7])
  i524.m_PressedColor = new pc.Color(i525[8], i525[9], i525[10], i525[11])
  i524.m_SelectedColor = new pc.Color(i525[12], i525[13], i525[14], i525[15])
  i524.m_DisabledColor = new pc.Color(i525[16], i525[17], i525[18], i525[19])
  i524.m_ColorMultiplier = i525[20]
  i524.m_FadeDuration = i525[21]
  return i524
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_HighlightedSprite')
  request.r(i527[2], i527[3], 0, i526, 'm_PressedSprite')
  request.r(i527[4], i527[5], 0, i526, 'm_SelectedSprite')
  request.r(i527[6], i527[7], 0, i526, 'm_DisabledSprite')
  return i526
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i529 = data
  i528.m_NormalTrigger = i529[0]
  i528.m_HighlightedTrigger = i529[1]
  i528.m_PressedTrigger = i529[2]
  i528.m_SelectedTrigger = i529[3]
  i528.m_DisabledTrigger = i529[4]
  return i528
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.Button' )
  var i531 = data
  i530.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i531[0], i530.m_OnClick)
  i530.m_Navigation = request.d('UnityEngine.UI.Navigation', i531[1], i530.m_Navigation)
  i530.m_Transition = i531[2]
  i530.m_Colors = request.d('UnityEngine.UI.ColorBlock', i531[3], i530.m_Colors)
  i530.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i531[4], i530.m_SpriteState)
  i530.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i531[5], i530.m_AnimationTriggers)
  i530.m_Interactable = !!i531[6]
  request.r(i531[7], i531[8], 0, i530, 'm_TargetGraphic')
  return i530
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i533 = data
  i532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i533[0], i532.m_PersistentCalls)
  return i532
}

Deserializers["ClickerGame"] = function (request, data, root) {
  var i534 = root || request.c( 'ClickerGame' )
  var i535 = data
  i534.targetClicks = i535[0]
  i534.currentScore = i535[1]
  i534.pointsPerClick = i535[2]
  request.r(i535[3], i535[4], 0, i534, 'scoreText')
  request.r(i535[5], i535[6], 0, i534, 'targetText')
  request.r(i535[7], i535[8], 0, i534, 'progressSlider')
  request.r(i535[9], i535[10], 0, i534, 'clickButton')
  request.r(i535[11], i535[12], 0, i534, 'buttonTransform')
  request.r(i535[13], i535[14], 0, i534, 'restartButton')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i537 = data
  i536.ambientIntensity = i537[0]
  i536.reflectionIntensity = i537[1]
  i536.ambientMode = i537[2]
  i536.ambientLight = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.ambientSkyColor = new pc.Color(i537[7], i537[8], i537[9], i537[10])
  i536.ambientGroundColor = new pc.Color(i537[11], i537[12], i537[13], i537[14])
  i536.ambientEquatorColor = new pc.Color(i537[15], i537[16], i537[17], i537[18])
  i536.fogColor = new pc.Color(i537[19], i537[20], i537[21], i537[22])
  i536.fogEndDistance = i537[23]
  i536.fogStartDistance = i537[24]
  i536.fogDensity = i537[25]
  i536.fog = !!i537[26]
  request.r(i537[27], i537[28], 0, i536, 'skybox')
  i536.fogMode = i537[29]
  var i539 = i537[30]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i539[i + 0]) );
  }
  i536.lightmaps = i538
  i536.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i537[31], i536.lightProbes)
  i536.lightmapsMode = i537[32]
  i536.mixedBakeMode = i537[33]
  i536.environmentLightingMode = i537[34]
  i536.ambientProbe = new pc.SphericalHarmonicsL2(i537[35])
  request.r(i537[36], i537[37], 0, i536, 'customReflection')
  request.r(i537[38], i537[39], 0, i536, 'defaultReflection')
  i536.defaultReflectionMode = i537[40]
  i536.defaultReflectionResolution = i537[41]
  i536.sunLightObjectId = i537[42]
  i536.pixelLightCount = i537[43]
  i536.defaultReflectionHDR = !!i537[44]
  i536.hasLightDataAsset = !!i537[45]
  i536.hasManualGenerate = !!i537[46]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'lightmapColor')
  request.r(i543[2], i543[3], 0, i542, 'lightmapDirection')
  request.r(i543[4], i543[5], 0, i542, 'shadowMask')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i544 = root || new UnityEngine.LightProbes()
  var i545 = data
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i555[i + 0]));
  }
  i552.ShaderCompilationErrors = i554
  i552.name = i553[1]
  i552.guid = i553[2]
  var i557 = i553[3]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.shaderDefinedKeywords = i556
  var i559 = i553[4]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i559[i + 0]) );
  }
  i552.passes = i558
  var i561 = i553[5]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i561[i + 0]) );
  }
  i552.usePasses = i560
  var i563 = i553[6]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i563[i + 0]) );
  }
  i552.defaultParameterValues = i562
  request.r(i553[7], i553[8], 0, i552, 'unityFallbackShader')
  i552.readDepth = !!i553[9]
  i552.hasDepthOnlyPass = !!i553[10]
  i552.isCreatedByShaderGraph = !!i553[11]
  i552.disableBatching = !!i553[12]
  i552.compiled = !!i553[13]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i567 = data
  i566.shaderName = i567[0]
  i566.errorMessage = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i572 = root || new pc.UnityShaderPass()
  var i573 = data
  i572.id = i573[0]
  i572.subShaderIndex = i573[1]
  i572.name = i573[2]
  i572.passType = i573[3]
  i572.grabPassTextureName = i573[4]
  i572.usePass = !!i573[5]
  i572.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[6], i572.zTest)
  i572.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[7], i572.zWrite)
  i572.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[8], i572.culling)
  i572.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i573[9], i572.blending)
  i572.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i573[10], i572.alphaBlending)
  i572.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[11], i572.colorWriteMask)
  i572.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[12], i572.offsetUnits)
  i572.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[13], i572.offsetFactor)
  i572.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[14], i572.stencilRef)
  i572.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[15], i572.stencilReadMask)
  i572.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[16], i572.stencilWriteMask)
  i572.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i573[17], i572.stencilOp)
  i572.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i573[18], i572.stencilOpFront)
  i572.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i573[19], i572.stencilOpBack)
  var i575 = i573[20]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i575[i + 0]) );
  }
  i572.tags = i574
  var i577 = i573[21]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( i577[i + 0] );
  }
  i572.passDefinedKeywords = i576
  var i579 = i573[22]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i579[i + 0]) );
  }
  i572.passDefinedKeywordGroups = i578
  var i581 = i573[23]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i581[i + 0]) );
  }
  i572.variants = i580
  var i583 = i573[24]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i583[i + 0]) );
  }
  i572.excludedVariants = i582
  i572.hasDepthReader = !!i573[25]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i585 = data
  i584.val = i585[0]
  i584.name = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i587 = data
  i586.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[0], i586.src)
  i586.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[1], i586.dst)
  i586.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[2], i586.op)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i589 = data
  i588.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[0], i588.pass)
  i588.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[1], i588.fail)
  i588.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[2], i588.zFail)
  i588.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[3], i588.comp)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i593 = data
  i592.name = i593[0]
  i592.value = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i597 = data
  var i599 = i597[0]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i596.keywords = i598
  i596.hasDiscard = !!i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i603 = data
  i602.passId = i603[0]
  i602.subShaderIndex = i603[1]
  var i605 = i603[2]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( i605[i + 0] );
  }
  i602.keywords = i604
  i602.vertexProgram = i603[3]
  i602.fragmentProgram = i603[4]
  i602.exportedForWebGl2 = !!i603[5]
  i602.readDepth = !!i603[6]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'shader')
  i608.pass = i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i613 = data
  i612.name = i613[0]
  i612.type = i613[1]
  i612.value = new pc.Vec4( i613[2], i613[3], i613[4], i613[5] )
  i612.textureValue = i613[6]
  i612.shaderPropertyFlag = i613[7]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i615 = data
  i614.name = i615[0]
  i614.bytes64 = i615[1]
  i614.data = i615[2]
  return i614
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i616 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i617 = data
  i616.normalStyle = i617[0]
  i616.normalSpacingOffset = i617[1]
  i616.boldStyle = i617[2]
  i616.boldSpacing = i617[3]
  i616.italicStyle = i617[4]
  i616.tabSize = i617[5]
  request.r(i617[6], i617[7], 0, i616, 'atlas')
  i616.m_SourceFontFileGUID = i617[8]
  i616.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i617[9], i616.m_CreationSettings)
  request.r(i617[10], i617[11], 0, i616, 'm_SourceFontFile')
  i616.m_SourceFontFilePath = i617[12]
  i616.m_AtlasPopulationMode = i617[13]
  i616.InternalDynamicOS = !!i617[14]
  var i619 = i617[15]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i619.length; i += 1) {
    i618.add(request.d('UnityEngine.TextCore.Glyph', i619[i + 0]));
  }
  i616.m_GlyphTable = i618
  var i621 = i617[16]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i621.length; i += 1) {
    i620.add(request.d('TMPro.TMP_Character', i621[i + 0]));
  }
  i616.m_CharacterTable = i620
  var i623 = i617[17]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i616.m_AtlasTextures = i622
  i616.m_AtlasTextureIndex = i617[18]
  i616.m_IsMultiAtlasTexturesEnabled = !!i617[19]
  i616.m_GetFontFeatures = !!i617[20]
  i616.m_ClearDynamicDataOnBuild = !!i617[21]
  i616.m_AtlasWidth = i617[22]
  i616.m_AtlasHeight = i617[23]
  i616.m_AtlasPadding = i617[24]
  i616.m_AtlasRenderMode = i617[25]
  var i625 = i617[26]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('UnityEngine.TextCore.GlyphRect', i625[i + 0]));
  }
  i616.m_UsedGlyphRects = i624
  var i627 = i617[27]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('UnityEngine.TextCore.GlyphRect', i627[i + 0]));
  }
  i616.m_FreeGlyphRects = i626
  i616.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i617[28], i616.m_FontFeatureTable)
  i616.m_ShouldReimportFontFeatures = !!i617[29]
  var i629 = i617[30]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 1, i628, '')
  }
  i616.m_FallbackFontAssetTable = i628
  var i631 = i617[31]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('TMPro.TMP_FontWeightPair', i631[i + 0]) );
  }
  i616.m_FontWeightTable = i630
  var i633 = i617[32]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('TMPro.TMP_FontWeightPair', i633[i + 0]) );
  }
  i616.fontWeights = i632
  i616.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i617[33], i616.m_fontInfo)
  var i635 = i617[34]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i635.length; i += 1) {
    i634.add(request.d('TMPro.TMP_Glyph', i635[i + 0]));
  }
  i616.m_glyphInfoList = i634
  i616.m_KerningTable = request.d('TMPro.KerningTable', i617[35], i616.m_KerningTable)
  var i637 = i617[36]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i616.fallbackFontAssets = i636
  i616.m_Version = i617[37]
  i616.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i617[38], i616.m_FaceInfo)
  request.r(i617[39], i617[40], 0, i616, 'm_Material')
  return i616
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i639 = data
  i638.sourceFontFileName = i639[0]
  i638.sourceFontFileGUID = i639[1]
  i638.faceIndex = i639[2]
  i638.pointSizeSamplingMode = i639[3]
  i638.pointSize = i639[4]
  i638.padding = i639[5]
  i638.paddingMode = i639[6]
  i638.packingMode = i639[7]
  i638.atlasWidth = i639[8]
  i638.atlasHeight = i639[9]
  i638.characterSetSelectionMode = i639[10]
  i638.characterSequence = i639[11]
  i638.referencedFontAssetGUID = i639[12]
  i638.referencedTextAssetGUID = i639[13]
  i638.fontStyle = i639[14]
  i638.fontStyleModifier = i639[15]
  i638.renderMode = i639[16]
  i638.includeFontFeatures = !!i639[17]
  return i638
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i643 = data
  i642.m_Index = i643[0]
  i642.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i643[1], i642.m_Metrics)
  i642.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i643[2], i642.m_GlyphRect)
  i642.m_Scale = i643[3]
  i642.m_AtlasIndex = i643[4]
  i642.m_ClassDefinitionType = i643[5]
  return i642
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i645 = data
  i644.m_Width = i645[0]
  i644.m_Height = i645[1]
  i644.m_HorizontalBearingX = i645[2]
  i644.m_HorizontalBearingY = i645[3]
  i644.m_HorizontalAdvance = i645[4]
  return i644
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i647 = data
  i646.m_X = i647[0]
  i646.m_Y = i647[1]
  i646.m_Width = i647[2]
  i646.m_Height = i647[3]
  return i646
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i650 = root || request.c( 'TMPro.TMP_Character' )
  var i651 = data
  i650.m_ElementType = i651[0]
  i650.m_Unicode = i651[1]
  i650.m_GlyphIndex = i651[2]
  i650.m_Scale = i651[3]
  return i650
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i656 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i657 = data
  var i659 = i657[0]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('TMPro.MultipleSubstitutionRecord', i659[i + 0]));
  }
  i656.m_MultipleSubstitutionRecords = i658
  var i661 = i657[1]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('TMPro.LigatureSubstitutionRecord', i661[i + 0]));
  }
  i656.m_LigatureSubstitutionRecords = i660
  var i663 = i657[2]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i663[i + 0]));
  }
  i656.m_GlyphPairAdjustmentRecords = i662
  var i665 = i657[3]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i665[i + 0]));
  }
  i656.m_MarkToBaseAdjustmentRecords = i664
  var i667 = i657[4]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i667[i + 0]));
  }
  i656.m_MarkToMarkAdjustmentRecords = i666
  return i656
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i670 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i671 = data
  i670.m_TargetGlyphID = i671[0]
  i670.m_SubstituteGlyphIDs = i671[1]
  return i670
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i674 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i675 = data
  i674.m_ComponentGlyphIDs = i675[0]
  i674.m_LigatureGlyphID = i675[1]
  return i674
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i679 = data
  i678.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i679[0], i678.m_FirstAdjustmentRecord)
  i678.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i679[1], i678.m_SecondAdjustmentRecord)
  i678.m_FeatureLookupFlags = i679[2]
  return i678
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i681 = data
  i680.m_GlyphIndex = i681[0]
  i680.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i681[1], i680.m_GlyphValueRecord)
  return i680
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i683 = data
  i682.m_XPlacement = i683[0]
  i682.m_YPlacement = i683[1]
  i682.m_XAdvance = i683[2]
  i682.m_YAdvance = i683[3]
  return i682
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i686 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i687 = data
  i686.m_BaseGlyphID = i687[0]
  i686.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i687[1], i686.m_BaseGlyphAnchorPoint)
  i686.m_MarkGlyphID = i687[2]
  i686.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i687[3], i686.m_MarkPositionAdjustment)
  return i686
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i690 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i691 = data
  i690.m_BaseMarkGlyphID = i691[0]
  i690.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i691[1], i690.m_BaseMarkGlyphAnchorPoint)
  i690.m_CombiningMarkGlyphID = i691[2]
  i690.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i691[3], i690.m_CombiningMarkPositionAdjustment)
  return i690
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'regularTypeface')
  request.r(i697[2], i697[3], 0, i696, 'italicTypeface')
  return i696
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i698 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i699 = data
  i698.Name = i699[0]
  i698.PointSize = i699[1]
  i698.Scale = i699[2]
  i698.CharacterCount = i699[3]
  i698.LineHeight = i699[4]
  i698.Baseline = i699[5]
  i698.Ascender = i699[6]
  i698.CapHeight = i699[7]
  i698.Descender = i699[8]
  i698.CenterLine = i699[9]
  i698.SuperscriptOffset = i699[10]
  i698.SubscriptOffset = i699[11]
  i698.SubSize = i699[12]
  i698.Underline = i699[13]
  i698.UnderlineThickness = i699[14]
  i698.strikethrough = i699[15]
  i698.strikethroughThickness = i699[16]
  i698.TabWidth = i699[17]
  i698.Padding = i699[18]
  i698.AtlasWidth = i699[19]
  i698.AtlasHeight = i699[20]
  return i698
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i702 = root || request.c( 'TMPro.TMP_Glyph' )
  var i703 = data
  i702.id = i703[0]
  i702.x = i703[1]
  i702.y = i703[2]
  i702.width = i703[3]
  i702.height = i703[4]
  i702.xOffset = i703[5]
  i702.yOffset = i703[6]
  i702.xAdvance = i703[7]
  i702.scale = i703[8]
  return i702
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i704 = root || request.c( 'TMPro.KerningTable' )
  var i705 = data
  var i707 = i705[0]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('TMPro.KerningPair', i707[i + 0]));
  }
  i704.kerningPairs = i706
  return i704
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.KerningPair' )
  var i711 = data
  i710.xOffset = i711[0]
  i710.m_FirstGlyph = i711[1]
  i710.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i711[2], i710.m_FirstGlyphAdjustments)
  i710.m_SecondGlyph = i711[3]
  i710.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i711[4], i710.m_SecondGlyphAdjustments)
  i710.m_IgnoreSpacingAdjustments = !!i711[5]
  return i710
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i713 = data
  i712.m_FaceIndex = i713[0]
  i712.m_FamilyName = i713[1]
  i712.m_StyleName = i713[2]
  i712.m_PointSize = i713[3]
  i712.m_Scale = i713[4]
  i712.m_UnitsPerEM = i713[5]
  i712.m_LineHeight = i713[6]
  i712.m_AscentLine = i713[7]
  i712.m_CapLine = i713[8]
  i712.m_MeanLine = i713[9]
  i712.m_Baseline = i713[10]
  i712.m_DescentLine = i713[11]
  i712.m_SuperscriptOffset = i713[12]
  i712.m_SuperscriptSize = i713[13]
  i712.m_SubscriptOffset = i713[14]
  i712.m_SubscriptSize = i713[15]
  i712.m_UnderlineOffset = i713[16]
  i712.m_UnderlineThickness = i713[17]
  i712.m_StrikethroughOffset = i713[18]
  i712.m_StrikethroughThickness = i713[19]
  i712.m_TabWidth = i713[20]
  return i712
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i714 = root || request.c( 'TMPro.TMP_Settings' )
  var i715 = data
  i714.assetVersion = i715[0]
  i714.m_TextWrappingMode = i715[1]
  i714.m_enableKerning = !!i715[2]
  var i717 = i715[3]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(i717[i + 0]);
  }
  i714.m_ActiveFontFeatures = i716
  i714.m_enableExtraPadding = !!i715[4]
  i714.m_enableTintAllSprites = !!i715[5]
  i714.m_enableParseEscapeCharacters = !!i715[6]
  i714.m_EnableRaycastTarget = !!i715[7]
  i714.m_GetFontFeaturesAtRuntime = !!i715[8]
  i714.m_missingGlyphCharacter = i715[9]
  i714.m_ClearDynamicDataOnBuild = !!i715[10]
  i714.m_warningsDisabled = !!i715[11]
  request.r(i715[12], i715[13], 0, i714, 'm_defaultFontAsset')
  i714.m_defaultFontAssetPath = i715[14]
  i714.m_defaultFontSize = i715[15]
  i714.m_defaultAutoSizeMinRatio = i715[16]
  i714.m_defaultAutoSizeMaxRatio = i715[17]
  i714.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i715[18], i715[19] )
  i714.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i715[20], i715[21] )
  i714.m_autoSizeTextContainer = !!i715[22]
  i714.m_IsTextObjectScaleStatic = !!i715[23]
  var i719 = i715[24]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i714.m_fallbackFontAssets = i718
  i714.m_matchMaterialPreset = !!i715[25]
  i714.m_HideSubTextObjects = !!i715[26]
  request.r(i715[27], i715[28], 0, i714, 'm_defaultSpriteAsset')
  i714.m_defaultSpriteAssetPath = i715[29]
  i714.m_enableEmojiSupport = !!i715[30]
  i714.m_MissingCharacterSpriteUnicode = i715[31]
  var i721 = i715[32]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 1, i720, '')
  }
  i714.m_EmojiFallbackTextAssets = i720
  i714.m_defaultColorGradientPresetsPath = i715[33]
  request.r(i715[34], i715[35], 0, i714, 'm_defaultStyleSheet')
  i714.m_StyleSheetsResourcePath = i715[36]
  request.r(i715[37], i715[38], 0, i714, 'm_leadingCharacters')
  request.r(i715[39], i715[40], 0, i714, 'm_followingCharacters')
  i714.m_UseModernHangulLineBreakingRules = !!i715[41]
  return i714
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'spriteSheet')
  var i727 = i725[2]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('TMPro.TMP_Sprite', i727[i + 0]));
  }
  i724.spriteInfoList = i726
  var i729 = i725[3]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i724.fallbackSpriteAssets = i728
  var i731 = i725[4]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('TMPro.TMP_SpriteCharacter', i731[i + 0]));
  }
  i724.m_SpriteCharacterTable = i730
  var i733 = i725[5]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('TMPro.TMP_SpriteGlyph', i733[i + 0]));
  }
  i724.m_GlyphTable = i732
  i724.m_Version = i725[6]
  i724.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i725[7], i724.m_FaceInfo)
  request.r(i725[8], i725[9], 0, i724, 'm_Material')
  return i724
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i736 = root || request.c( 'TMPro.TMP_Sprite' )
  var i737 = data
  i736.name = i737[0]
  i736.hashCode = i737[1]
  i736.unicode = i737[2]
  i736.pivot = new pc.Vec2( i737[3], i737[4] )
  request.r(i737[5], i737[6], 0, i736, 'sprite')
  i736.id = i737[7]
  i736.x = i737[8]
  i736.y = i737[9]
  i736.width = i737[10]
  i736.height = i737[11]
  i736.xOffset = i737[12]
  i736.yOffset = i737[13]
  i736.xAdvance = i737[14]
  i736.scale = i737[15]
  return i736
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i743 = data
  i742.m_Name = i743[0]
  i742.m_ElementType = i743[1]
  i742.m_Unicode = i743[2]
  i742.m_GlyphIndex = i743[3]
  i742.m_Scale = i743[4]
  return i742
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'sprite')
  i746.m_Index = i747[2]
  i746.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i747[3], i746.m_Metrics)
  i746.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i747[4], i746.m_GlyphRect)
  i746.m_Scale = i747[5]
  i746.m_AtlasIndex = i747[6]
  i746.m_ClassDefinitionType = i747[7]
  return i746
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i749 = data
  var i751 = i749[0]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('TMPro.TMP_Style', i751[i + 0]));
  }
  i748.m_StyleList = i750
  return i748
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TMP_Style' )
  var i755 = data
  i754.m_Name = i755[0]
  i754.m_HashCode = i755[1]
  i754.m_OpeningDefinition = i755[2]
  i754.m_ClosingDefinition = i755[3]
  i754.m_OpeningTagArray = i755[4]
  i754.m_ClosingTagArray = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i759[i + 0]) );
  }
  i756.files = i758
  i756.componentToPrefabIds = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i763 = data
  i762.path = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'unityObject')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i767[i + 0]) );
  }
  i764.scriptsExecutionOrder = i766
  var i769 = i765[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i769[i + 0]) );
  }
  i764.sortingLayers = i768
  var i771 = i765[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i771[i + 0]) );
  }
  i764.cullingLayers = i770
  i764.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i765[3], i764.timeSettings)
  i764.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i765[4], i764.physicsSettings)
  i764.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i765[5], i764.physics2DSettings)
  i764.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i765[6], i764.qualitySettings)
  i764.enableRealtimeShadows = !!i765[7]
  i764.enableAutoInstancing = !!i765[8]
  i764.enableStaticBatching = !!i765[9]
  i764.enableDynamicBatching = !!i765[10]
  i764.usePreservativeDynamicBatching = !!i765[11]
  i764.lightmapEncodingQuality = i765[12]
  i764.desiredColorSpace = i765[13]
  var i773 = i765[14]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i764.allTags = i772
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i777 = data
  i776.name = i777[0]
  i776.value = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i781 = data
  i780.id = i781[0]
  i780.name = i781[1]
  i780.value = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i785 = data
  i784.id = i785[0]
  i784.name = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i787 = data
  i786.fixedDeltaTime = i787[0]
  i786.maximumDeltaTime = i787[1]
  i786.timeScale = i787[2]
  i786.maximumParticleTimestep = i787[3]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i789 = data
  i788.gravity = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.defaultSolverIterations = i789[3]
  i788.bounceThreshold = i789[4]
  i788.autoSyncTransforms = !!i789[5]
  i788.autoSimulation = !!i789[6]
  var i791 = i789[7]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i791[i + 0]) );
  }
  i788.collisionMatrix = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i795 = data
  i794.enabled = !!i795[0]
  i794.layerId = i795[1]
  i794.otherLayerId = i795[2]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'material')
  i796.gravity = new pc.Vec2( i797[2], i797[3] )
  i796.positionIterations = i797[4]
  i796.velocityIterations = i797[5]
  i796.velocityThreshold = i797[6]
  i796.maxLinearCorrection = i797[7]
  i796.maxAngularCorrection = i797[8]
  i796.maxTranslationSpeed = i797[9]
  i796.maxRotationSpeed = i797[10]
  i796.baumgarteScale = i797[11]
  i796.baumgarteTOIScale = i797[12]
  i796.timeToSleep = i797[13]
  i796.linearSleepTolerance = i797[14]
  i796.angularSleepTolerance = i797[15]
  i796.defaultContactOffset = i797[16]
  i796.autoSimulation = !!i797[17]
  i796.queriesHitTriggers = !!i797[18]
  i796.queriesStartInColliders = !!i797[19]
  i796.callbacksOnDisable = !!i797[20]
  i796.reuseCollisionCallbacks = !!i797[21]
  i796.autoSyncTransforms = !!i797[22]
  var i799 = i797[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i799[i + 0]) );
  }
  i796.collisionMatrix = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i803 = data
  i802.enabled = !!i803[0]
  i802.layerId = i803[1]
  i802.otherLayerId = i803[2]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i807[i + 0]) );
  }
  i804.qualityLevels = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.names = i808
  i804.shadows = i805[2]
  i804.anisotropicFiltering = i805[3]
  i804.antiAliasing = i805[4]
  i804.lodBias = i805[5]
  i804.shadowCascades = i805[6]
  i804.shadowDistance = i805[7]
  i804.shadowmaskMode = i805[8]
  i804.shadowProjection = i805[9]
  i804.shadowResolution = i805[10]
  i804.softParticles = !!i805[11]
  i804.softVegetation = !!i805[12]
  i804.activeColorSpace = i805[13]
  i804.desiredColorSpace = i805[14]
  i804.masterTextureLimit = i805[15]
  i804.maxQueuedFrames = i805[16]
  i804.particleRaycastBudget = i805[17]
  i804.pixelLightCount = i805[18]
  i804.realtimeReflectionProbes = !!i805[19]
  i804.shadowCascade2Split = i805[20]
  i804.shadowCascade4Split = new pc.Vec3( i805[21], i805[22], i805[23] )
  i804.streamingMipmapsActive = !!i805[24]
  i804.vSyncCount = i805[25]
  i804.asyncUploadBufferSize = i805[26]
  i804.asyncUploadTimeSlice = i805[27]
  i804.billboardsFaceCameraPosition = !!i805[28]
  i804.shadowNearPlaneOffset = i805[29]
  i804.streamingMipmapsMemoryBudget = i805[30]
  i804.maximumLODLevel = i805[31]
  i804.streamingMipmapsAddAllCameras = !!i805[32]
  i804.streamingMipmapsMaxLevelReduction = i805[33]
  i804.streamingMipmapsRenderersPerFrame = i805[34]
  i804.resolutionScalingFixedDPIFactor = i805[35]
  i804.streamingMipmapsMaxFileIORequests = i805[36]
  i804.currentQualityLevel = i805[37]
  return i804
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'm_ObjectArgument')
  i812.m_ObjectArgumentAssemblyTypeName = i813[2]
  i812.m_IntArgument = i813[3]
  i812.m_FloatArgument = i813[4]
  i812.m_StringArgument = i813[5]
  i812.m_BoolArgument = !!i813[6]
  return i812
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i815 = data
  i814.m_XCoordinate = i815[0]
  i814.m_YCoordinate = i815[1]
  return i814
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i817 = data
  i816.m_XPositionAdjustment = i817[0]
  i816.m_YPositionAdjustment = i817[1]
  return i816
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i819 = data
  i818.xPlacement = i819[0]
  i818.yPlacement = i819[1]
  i818.xAdvance = i819[2]
  i818.yAdvance = i819[3]
  return i818
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[32],"33":[2],"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[42],"50":[42],"51":[42],"52":[42],"53":[42],"54":[42],"55":[2],"56":[57],"58":[59],"60":[59],"9":[8],"61":[8],"62":[2],"4":[2],"63":[64],"65":[8],"66":[12,8],"67":[57],"68":[12,8],"69":[8],"70":[8],"71":[57,8],"14":[8,12],"72":[73],"74":[73],"75":[73],"76":[8],"77":[8],"11":[9],"13":[12,8],"78":[8],"10":[9],"79":[8],"80":[8],"81":[8],"82":[8],"83":[8],"84":[8],"85":[8],"86":[8],"87":[8],"88":[12,8],"89":[8],"90":[8],"91":[8],"17":[8],"92":[12,8],"93":[8],"94":[6],"95":[6],"7":[6],"96":[6],"97":[2],"98":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Slider","UnityEngine.UI.Button","ClickerGame","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f1";

Deserializers.productName = "Unity Playworks CP1";

Deserializers.lunaInitializationTime = "10/15/2026 17:19:13";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "483aba1aba7a7d042b13bf94490745cd";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 17.0.4\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1719";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3527";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-URP";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "0de8e111-d8e2-4896-96b9-bd28cb5c7c85";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


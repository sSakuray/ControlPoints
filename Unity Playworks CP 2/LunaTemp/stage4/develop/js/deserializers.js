var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.JointSpring' )
  var i311 = data
  i310.spring = i311[0]
  i310.damper = i311[1]
  i310.targetPosition = i311[2]
  return i310
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.JointMotor' )
  var i313 = data
  i312.m_TargetVelocity = i313[0]
  i312.m_Force = i313[1]
  i312.m_FreeSpin = i313[2]
  return i312
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.JointLimits' )
  var i315 = data
  i314.m_Min = i315[0]
  i314.m_Max = i315[1]
  i314.m_Bounciness = i315[2]
  i314.m_BounceMinVelocity = i315[3]
  i314.m_ContactDistance = i315[4]
  i314.minBounce = i315[5]
  i314.maxBounce = i315[6]
  return i314
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.JointDrive' )
  var i317 = data
  i316.m_PositionSpring = i317[0]
  i316.m_PositionDamper = i317[1]
  i316.m_MaximumForce = i317[2]
  i316.m_UseAcceleration = i317[3]
  return i316
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i319 = data
  i318.m_Spring = i319[0]
  i318.m_Damper = i319[1]
  return i318
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i321 = data
  i320.m_Limit = i321[0]
  i320.m_Bounciness = i321[1]
  i320.m_ContactDistance = i321[2]
  return i320
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i323 = data
  i322.m_ExtremumSlip = i323[0]
  i322.m_ExtremumValue = i323[1]
  i322.m_AsymptoteSlip = i323[2]
  i322.m_AsymptoteValue = i323[3]
  i322.m_Stiffness = i323[4]
  return i322
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i325 = data
  i324.m_LowerAngle = i325[0]
  i324.m_UpperAngle = i325[1]
  return i324
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i327 = data
  i326.m_MotorSpeed = i327[0]
  i326.m_MaximumMotorTorque = i327[1]
  return i326
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i329 = data
  i328.m_DampingRatio = i329[0]
  i328.m_Frequency = i329[1]
  i328.m_Angle = i329[2]
  return i328
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i331 = data
  i330.m_LowerTranslation = i331[0]
  i330.m_UpperTranslation = i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i333 = data
  i332.name = i333[0]
  i332.halfPrecision = !!i333[1]
  i332.useSimplification = !!i333[2]
  i332.useUInt32IndexFormat = !!i333[3]
  i332.vertexCount = i333[4]
  i332.aabb = i333[5]
  var i335 = i333[6]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( !!i335[i + 0] );
  }
  i332.streams = i334
  i332.vertices = i333[7]
  var i337 = i333[8]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i337[i + 0]) );
  }
  i332.subMeshes = i336
  var i339 = i333[9]
  var i338 = []
  for(var i = 0; i < i339.length; i += 16) {
    i338.push( new pc.Mat4().setData(i339[i + 0], i339[i + 1], i339[i + 2], i339[i + 3],  i339[i + 4], i339[i + 5], i339[i + 6], i339[i + 7],  i339[i + 8], i339[i + 9], i339[i + 10], i339[i + 11],  i339[i + 12], i339[i + 13], i339[i + 14], i339[i + 15]) );
  }
  i332.bindposes = i338
  var i341 = i333[10]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i341[i + 0]) );
  }
  i332.blendShapes = i340
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i347 = data
  i346.triangles = i347[0]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i353 = data
  i352.name = i353[0]
  var i355 = i353[1]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i355[i + 0]) );
  }
  i352.frames = i354
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i356 = root || new pc.UnityMaterial()
  var i357 = data
  i356.name = i357[0]
  request.r(i357[1], i357[2], 0, i356, 'shader')
  i356.renderQueue = i357[3]
  i356.enableInstancing = !!i357[4]
  var i359 = i357[5]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i359[i + 0]) );
  }
  i356.floatParameters = i358
  var i361 = i357[6]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i361[i + 0]) );
  }
  i356.colorParameters = i360
  var i363 = i357[7]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i363[i + 0]) );
  }
  i356.vectorParameters = i362
  var i365 = i357[8]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i365[i + 0]) );
  }
  i356.textureParameters = i364
  var i367 = i357[9]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i367[i + 0]) );
  }
  i356.materialFlags = i366
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i371 = data
  i370.name = i371[0]
  i370.value = i371[1]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i375 = data
  i374.name = i375[0]
  i374.value = new pc.Color(i375[1], i375[2], i375[3], i375[4])
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = new pc.Vec4( i379[1], i379[2], i379[3], i379[4] )
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i383 = data
  i382.name = i383[0]
  request.r(i383[1], i383[2], 0, i382, 'value')
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i387 = data
  i386.name = i387[0]
  i386.enabled = !!i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i389 = data
  i388.name = i389[0]
  i388.width = i389[1]
  i388.height = i389[2]
  i388.mipmapCount = i389[3]
  i388.anisoLevel = i389[4]
  i388.filterMode = i389[5]
  i388.hdr = !!i389[6]
  i388.format = i389[7]
  i388.wrapMode = i389[8]
  i388.alphaIsTransparency = !!i389[9]
  i388.alphaSource = i389[10]
  i388.graphicsFormat = i389[11]
  i388.sRGBTexture = !!i389[12]
  i388.desiredColorSpace = i389[13]
  i388.wrapU = i389[14]
  i388.wrapV = i389[15]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i391 = data
  i390.name = i391[0]
  i390.atlasId = i391[1]
  i390.mipmapCount = i391[2]
  i390.hdr = !!i391[3]
  i390.size = i391[4]
  i390.anisoLevel = i391[5]
  i390.filterMode = i391[6]
  var i393 = i391[7]
  var i392 = []
  for(var i = 0; i < i393.length; i += 4) {
    i392.push( UnityEngine.Rect.MinMaxRect(i393[i + 0], i393[i + 1], i393[i + 2], i393[i + 3]) );
  }
  i390.rects = i392
  i390.wrapU = i391[8]
  i390.wrapV = i391[9]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i397 = data
  i396.name = i397[0]
  i396.index = i397[1]
  i396.startup = !!i397[2]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i399 = data
  i398.aspect = i399[0]
  i398.orthographic = !!i399[1]
  i398.orthographicSize = i399[2]
  i398.backgroundColor = new pc.Color(i399[3], i399[4], i399[5], i399[6])
  i398.nearClipPlane = i399[7]
  i398.farClipPlane = i399[8]
  i398.fieldOfView = i399[9]
  i398.depth = i399[10]
  i398.clearFlags = i399[11]
  i398.cullingMask = i399[12]
  i398.rect = i399[13]
  request.r(i399[14], i399[15], 0, i398, 'targetTexture')
  i398.usePhysicalProperties = !!i399[16]
  i398.focalLength = i399[17]
  i398.sensorSize = new pc.Vec2( i399[18], i399[19] )
  i398.lensShift = new pc.Vec2( i399[20], i399[21] )
  i398.gateFit = i399[22]
  i398.commandBufferCount = i399[23]
  i398.cameraType = i399[24]
  i398.enabled = !!i399[25]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i401 = data
  i400.name = i401[0]
  i400.tagId = i401[1]
  i400.enabled = !!i401[2]
  i400.isStatic = !!i401[3]
  i400.layer = i401[4]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i403 = data
  i402.type = i403[0]
  i402.color = new pc.Color(i403[1], i403[2], i403[3], i403[4])
  i402.cullingMask = i403[5]
  i402.intensity = i403[6]
  i402.range = i403[7]
  i402.spotAngle = i403[8]
  i402.shadows = i403[9]
  i402.shadowNormalBias = i403[10]
  i402.shadowBias = i403[11]
  i402.shadowStrength = i403[12]
  i402.shadowResolution = i403[13]
  i402.lightmapBakeType = i403[14]
  i402.renderMode = i403[15]
  request.r(i403[16], i403[17], 0, i402, 'cookie')
  i402.cookieSize = i403[18]
  i402.shadowNearPlane = i403[19]
  i402.occlusionMaskChannel = i403[20]
  i402.isBaked = !!i403[21]
  i402.mixedLightingMode = i403[22]
  i402.enabled = !!i403[23]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i405 = data
  request.r(i405[0], i405[1], 0, i404, 'sharedMesh')
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'additionalVertexStreams')
  i406.enabled = !!i407[2]
  request.r(i407[3], i407[4], 0, i406, 'sharedMaterial')
  var i409 = i407[5]
  var i408 = []
  for(var i = 0; i < i409.length; i += 2) {
  request.r(i409[i + 0], i409[i + 1], 2, i408, '')
  }
  i406.sharedMaterials = i408
  i406.receiveShadows = !!i407[6]
  i406.shadowCastingMode = i407[7]
  i406.sortingLayerID = i407[8]
  i406.sortingOrder = i407[9]
  i406.lightmapIndex = i407[10]
  i406.lightmapSceneIndex = i407[11]
  i406.lightmapScaleOffset = new pc.Vec4( i407[12], i407[13], i407[14], i407[15] )
  i406.lightProbeUsage = i407[16]
  i406.reflectionProbeUsage = i407[17]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i413 = data
  i412.pivot = new pc.Vec2( i413[0], i413[1] )
  i412.anchorMin = new pc.Vec2( i413[2], i413[3] )
  i412.anchorMax = new pc.Vec2( i413[4], i413[5] )
  i412.sizeDelta = new pc.Vec2( i413[6], i413[7] )
  i412.anchoredPosition3D = new pc.Vec3( i413[8], i413[9], i413[10] )
  i412.rotation = new pc.Quat(i413[11], i413[12], i413[13], i413[14])
  i412.scale = new pc.Vec3( i413[15], i413[16], i413[17] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i415 = data
  i414.planeDistance = i415[0]
  i414.referencePixelsPerUnit = i415[1]
  i414.isFallbackOverlay = !!i415[2]
  i414.renderMode = i415[3]
  i414.renderOrder = i415[4]
  i414.sortingLayerName = i415[5]
  i414.sortingOrder = i415[6]
  i414.scaleFactor = i415[7]
  request.r(i415[8], i415[9], 0, i414, 'worldCamera')
  i414.overrideSorting = !!i415[10]
  i414.pixelPerfect = !!i415[11]
  i414.targetDisplay = i415[12]
  i414.overridePixelPerfect = !!i415[13]
  i414.enabled = !!i415[14]
  return i414
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i417 = data
  i416.m_UiScaleMode = i417[0]
  i416.m_ReferencePixelsPerUnit = i417[1]
  i416.m_ScaleFactor = i417[2]
  i416.m_ReferenceResolution = new pc.Vec2( i417[3], i417[4] )
  i416.m_ScreenMatchMode = i417[5]
  i416.m_MatchWidthOrHeight = i417[6]
  i416.m_PhysicalUnit = i417[7]
  i416.m_FallbackScreenDPI = i417[8]
  i416.m_DefaultSpriteDPI = i417[9]
  i416.m_DynamicPixelsPerUnit = i417[10]
  i416.m_PresetInfoIsWorld = !!i417[11]
  return i416
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i419 = data
  i418.m_IgnoreReversedGraphics = !!i419[0]
  i418.m_BlockingObjects = i419[1]
  i418.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i419[2] )
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i421 = data
  i420.cullTransparentMesh = !!i421[0]
  return i420
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.UI.Image' )
  var i423 = data
  request.r(i423[0], i423[1], 0, i422, 'm_Sprite')
  i422.m_Type = i423[2]
  i422.m_PreserveAspect = !!i423[3]
  i422.m_FillCenter = !!i423[4]
  i422.m_FillMethod = i423[5]
  i422.m_FillAmount = i423[6]
  i422.m_FillClockwise = !!i423[7]
  i422.m_FillOrigin = i423[8]
  i422.m_UseSpriteMesh = !!i423[9]
  i422.m_PixelsPerUnitMultiplier = i423[10]
  request.r(i423[11], i423[12], 0, i422, 'm_Material')
  i422.m_Maskable = !!i423[13]
  i422.m_Color = new pc.Color(i423[14], i423[15], i423[16], i423[17])
  i422.m_RaycastTarget = !!i423[18]
  i422.m_RaycastPadding = new pc.Vec4( i423[19], i423[20], i423[21], i423[22] )
  return i422
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i425 = data
  i424.m_Padding = new pc.Vec4( i425[0], i425[1], i425[2], i425[3] )
  i424.m_Softness = new pc.Vec2( i425[4], i425[5] )
  return i424
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.Outline' )
  var i427 = data
  i426.m_EffectColor = new pc.Color(i427[0], i427[1], i427[2], i427[3])
  i426.m_EffectDistance = new pc.Vec2( i427[4], i427[5] )
  i426.m_UseGraphicAlpha = !!i427[6]
  return i426
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.UI.Text' )
  var i429 = data
  i428.m_FontData = request.d('UnityEngine.UI.FontData', i429[0], i428.m_FontData)
  i428.m_Text = i429[1]
  request.r(i429[2], i429[3], 0, i428, 'm_Material')
  i428.m_Maskable = !!i429[4]
  i428.m_Color = new pc.Color(i429[5], i429[6], i429[7], i429[8])
  i428.m_RaycastTarget = !!i429[9]
  i428.m_RaycastPadding = new pc.Vec4( i429[10], i429[11], i429[12], i429[13] )
  return i428
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.UI.FontData' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'm_Font')
  i430.m_FontSize = i431[2]
  i430.m_FontStyle = i431[3]
  i430.m_BestFit = !!i431[4]
  i430.m_MinSize = i431[5]
  i430.m_MaxSize = i431[6]
  i430.m_Alignment = i431[7]
  i430.m_AlignByGeometry = !!i431[8]
  i430.m_RichText = !!i431[9]
  i430.m_HorizontalOverflow = i431[10]
  i430.m_VerticalOverflow = i431[11]
  i430.m_LineSpacing = i431[12]
  return i430
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Button' )
  var i433 = data
  i432.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i433[0], i432.m_OnClick)
  i432.m_Navigation = request.d('UnityEngine.UI.Navigation', i433[1], i432.m_Navigation)
  i432.m_Transition = i433[2]
  i432.m_Colors = request.d('UnityEngine.UI.ColorBlock', i433[3], i432.m_Colors)
  i432.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i433[4], i432.m_SpriteState)
  i432.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i433[5], i432.m_AnimationTriggers)
  i432.m_Interactable = !!i433[6]
  request.r(i433[7], i433[8], 0, i432, 'm_TargetGraphic')
  return i432
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i435 = data
  i434.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i435[0], i434.m_PersistentCalls)
  return i434
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i437 = data
  var i439 = i437[0]
  var i438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i439.length; i += 1) {
    i438.add(request.d('UnityEngine.Events.PersistentCall', i439[i + 0]));
  }
  i436.m_Calls = i438
  return i436
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'm_Target')
  i442.m_TargetAssemblyTypeName = i443[2]
  i442.m_MethodName = i443[3]
  i442.m_Mode = i443[4]
  i442.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i443[5], i442.m_Arguments)
  i442.m_CallState = i443[6]
  return i442
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i445 = data
  request.r(i445[0], i445[1], 0, i444, 'm_ObjectArgument')
  i444.m_ObjectArgumentAssemblyTypeName = i445[2]
  i444.m_IntArgument = i445[3]
  i444.m_FloatArgument = i445[4]
  i444.m_StringArgument = i445[5]
  i444.m_BoolArgument = !!i445[6]
  return i444
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i447 = data
  i446.m_Mode = i447[0]
  i446.m_WrapAround = !!i447[1]
  request.r(i447[2], i447[3], 0, i446, 'm_SelectOnUp')
  request.r(i447[4], i447[5], 0, i446, 'm_SelectOnDown')
  request.r(i447[6], i447[7], 0, i446, 'm_SelectOnLeft')
  request.r(i447[8], i447[9], 0, i446, 'm_SelectOnRight')
  return i446
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i449 = data
  i448.m_NormalColor = new pc.Color(i449[0], i449[1], i449[2], i449[3])
  i448.m_HighlightedColor = new pc.Color(i449[4], i449[5], i449[6], i449[7])
  i448.m_PressedColor = new pc.Color(i449[8], i449[9], i449[10], i449[11])
  i448.m_SelectedColor = new pc.Color(i449[12], i449[13], i449[14], i449[15])
  i448.m_DisabledColor = new pc.Color(i449[16], i449[17], i449[18], i449[19])
  i448.m_ColorMultiplier = i449[20]
  i448.m_FadeDuration = i449[21]
  return i448
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'm_HighlightedSprite')
  request.r(i451[2], i451[3], 0, i450, 'm_PressedSprite')
  request.r(i451[4], i451[5], 0, i450, 'm_SelectedSprite')
  request.r(i451[6], i451[7], 0, i450, 'm_DisabledSprite')
  return i450
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i453 = data
  i452.m_NormalTrigger = i453[0]
  i452.m_HighlightedTrigger = i453[1]
  i452.m_PressedTrigger = i453[2]
  i452.m_SelectedTrigger = i453[3]
  i452.m_DisabledTrigger = i453[4]
  return i452
}

Deserializers["ReplayButtonHandler"] = function (request, data, root) {
  var i454 = root || request.c( 'ReplayButtonHandler' )
  var i455 = data
  return i454
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'm_FirstSelected')
  i456.m_sendNavigationEvents = !!i457[2]
  i456.m_DragThreshold = i457[3]
  return i456
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i459 = data
  i458.m_HorizontalAxis = i459[0]
  i458.m_VerticalAxis = i459[1]
  i458.m_SubmitButton = i459[2]
  i458.m_CancelButton = i459[3]
  i458.m_InputActionsPerSecond = i459[4]
  i458.m_RepeatDelay = i459[5]
  i458.m_ForceModuleActive = !!i459[6]
  i458.m_SendPointerHoverToParent = !!i459[7]
  return i458
}

Deserializers["GameManager3D"] = function (request, data, root) {
  var i460 = root || request.c( 'GameManager3D' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'mainCamera')
  request.r(i461[2], i461[3], 0, i460, 'chestRoot')
  request.r(i461[4], i461[5], 0, i460, 'chestLid')
  request.r(i461[6], i461[7], 0, i460, 'instructionPanel')
  var i463 = i461[8]
  var i462 = []
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 2, i462, '')
  }
  i460.flyingCoins = i462
  request.r(i461[9], i461[10], 0, i460, 'scoreText')
  request.r(i461[11], i461[12], 0, i460, 'comboText')
  request.r(i461[13], i461[14], 0, i460, 'scoreIconRect')
  request.r(i461[15], i461[16], 0, i460, 'scoreFillRect')
  request.r(i461[17], i461[18], 0, i460, 'progressFillRect')
  request.r(i461[19], i461[20], 0, i460, 'progressLabel')
  request.r(i461[21], i461[22], 0, i460, 'tutorialHand')
  request.r(i461[23], i461[24], 0, i460, 'victoryPanel')
  request.r(i461[25], i461[26], 0, i460, 'victoryCard')
  request.r(i461[27], i461[28], 0, i460, 'victoryScoreText')
  var i465 = i461[29]
  var i464 = []
  for(var i = 0; i < i465.length; i += 2) {
  request.r(i465[i + 0], i465[i + 1], 2, i464, '')
  }
  i460.starImages = i464
  request.r(i461[30], i461[31], 0, i460, 'replayButton')
  i460.targetProgress = i461[32]
  i460.pointsPerHit = i461[33]
  request.r(i461[34], i461[35], 0, i460, 'timingPanel')
  request.r(i461[36], i461[37], 0, i460, 'hitMarker')
  request.r(i461[38], i461[39], 0, i460, 'perfectZone')
  request.r(i461[40], i461[41], 0, i460, 'hitFeedback')
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i469 = data
  i468.ambientIntensity = i469[0]
  i468.reflectionIntensity = i469[1]
  i468.ambientMode = i469[2]
  i468.ambientLight = new pc.Color(i469[3], i469[4], i469[5], i469[6])
  i468.ambientSkyColor = new pc.Color(i469[7], i469[8], i469[9], i469[10])
  i468.ambientGroundColor = new pc.Color(i469[11], i469[12], i469[13], i469[14])
  i468.ambientEquatorColor = new pc.Color(i469[15], i469[16], i469[17], i469[18])
  i468.fogColor = new pc.Color(i469[19], i469[20], i469[21], i469[22])
  i468.fogEndDistance = i469[23]
  i468.fogStartDistance = i469[24]
  i468.fogDensity = i469[25]
  i468.fog = !!i469[26]
  request.r(i469[27], i469[28], 0, i468, 'skybox')
  i468.fogMode = i469[29]
  var i471 = i469[30]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i471[i + 0]) );
  }
  i468.lightmaps = i470
  i468.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i469[31], i468.lightProbes)
  i468.lightmapsMode = i469[32]
  i468.mixedBakeMode = i469[33]
  i468.environmentLightingMode = i469[34]
  i468.ambientProbe = new pc.SphericalHarmonicsL2(i469[35])
  request.r(i469[36], i469[37], 0, i468, 'customReflection')
  request.r(i469[38], i469[39], 0, i468, 'defaultReflection')
  i468.defaultReflectionMode = i469[40]
  i468.defaultReflectionResolution = i469[41]
  i468.sunLightObjectId = i469[42]
  i468.pixelLightCount = i469[43]
  i468.defaultReflectionHDR = !!i469[44]
  i468.hasLightDataAsset = !!i469[45]
  i468.hasManualGenerate = !!i469[46]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'lightmapColor')
  request.r(i475[2], i475[3], 0, i474, 'lightmapDirection')
  request.r(i475[4], i475[5], 0, i474, 'shadowMask')
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i476 = root || new UnityEngine.LightProbes()
  var i477 = data
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i485 = data
  var i487 = i485[0]
  var i486 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i487.length; i += 1) {
    i486.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i487[i + 0]));
  }
  i484.ShaderCompilationErrors = i486
  i484.name = i485[1]
  i484.guid = i485[2]
  var i489 = i485[3]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( i489[i + 0] );
  }
  i484.shaderDefinedKeywords = i488
  var i491 = i485[4]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i491[i + 0]) );
  }
  i484.passes = i490
  var i493 = i485[5]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i493[i + 0]) );
  }
  i484.usePasses = i492
  var i495 = i485[6]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i495[i + 0]) );
  }
  i484.defaultParameterValues = i494
  request.r(i485[7], i485[8], 0, i484, 'unityFallbackShader')
  i484.readDepth = !!i485[9]
  i484.hasDepthOnlyPass = !!i485[10]
  i484.isCreatedByShaderGraph = !!i485[11]
  i484.disableBatching = !!i485[12]
  i484.compiled = !!i485[13]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i499 = data
  i498.shaderName = i499[0]
  i498.errorMessage = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i504 = root || new pc.UnityShaderPass()
  var i505 = data
  i504.id = i505[0]
  i504.subShaderIndex = i505[1]
  i504.name = i505[2]
  i504.passType = i505[3]
  i504.grabPassTextureName = i505[4]
  i504.usePass = !!i505[5]
  i504.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[6], i504.zTest)
  i504.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[7], i504.zWrite)
  i504.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[8], i504.culling)
  i504.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i505[9], i504.blending)
  i504.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i505[10], i504.alphaBlending)
  i504.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[11], i504.colorWriteMask)
  i504.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[12], i504.offsetUnits)
  i504.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[13], i504.offsetFactor)
  i504.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[14], i504.stencilRef)
  i504.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[15], i504.stencilReadMask)
  i504.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i505[16], i504.stencilWriteMask)
  i504.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i505[17], i504.stencilOp)
  i504.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i505[18], i504.stencilOpFront)
  i504.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i505[19], i504.stencilOpBack)
  var i507 = i505[20]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i507[i + 0]) );
  }
  i504.tags = i506
  var i509 = i505[21]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i504.passDefinedKeywords = i508
  var i511 = i505[22]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i511[i + 0]) );
  }
  i504.passDefinedKeywordGroups = i510
  var i513 = i505[23]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i513[i + 0]) );
  }
  i504.variants = i512
  var i515 = i505[24]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i515[i + 0]) );
  }
  i504.excludedVariants = i514
  i504.hasDepthReader = !!i505[25]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i517 = data
  i516.val = i517[0]
  i516.name = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i519 = data
  i518.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[0], i518.src)
  i518.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[1], i518.dst)
  i518.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i519[2], i518.op)
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i521 = data
  i520.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[0], i520.pass)
  i520.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[1], i520.fail)
  i520.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[2], i520.zFail)
  i520.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[3], i520.comp)
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i525 = data
  i524.name = i525[0]
  i524.value = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i529 = data
  var i531 = i529[0]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( i531[i + 0] );
  }
  i528.keywords = i530
  i528.hasDiscard = !!i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i535 = data
  i534.passId = i535[0]
  i534.subShaderIndex = i535[1]
  var i537 = i535[2]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( i537[i + 0] );
  }
  i534.keywords = i536
  i534.vertexProgram = i535[3]
  i534.fragmentProgram = i535[4]
  i534.exportedForWebGl2 = !!i535[5]
  i534.readDepth = !!i535[6]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'shader')
  i540.pass = i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i545 = data
  i544.name = i545[0]
  i544.type = i545[1]
  i544.value = new pc.Vec4( i545[2], i545[3], i545[4], i545[5] )
  i544.textureValue = i545[6]
  i544.shaderPropertyFlag = i545[7]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i547 = data
  i546.name = i547[0]
  i546.ascent = i547[1]
  i546.originalLineHeight = i547[2]
  i546.fontSize = i547[3]
  var i549 = i547[4]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i549[i + 0]) );
  }
  i546.characterInfo = i548
  request.r(i547[5], i547[6], 0, i546, 'texture')
  i546.originalFontSize = i547[7]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i553 = data
  i552.index = i553[0]
  i552.advance = i553[1]
  i552.bearing = i553[2]
  i552.glyphWidth = i553[3]
  i552.glyphHeight = i553[4]
  i552.minX = i553[5]
  i552.maxX = i553[6]
  i552.minY = i553[7]
  i552.maxY = i553[8]
  i552.uvBottomLeftX = i553[9]
  i552.uvBottomLeftY = i553[10]
  i552.uvBottomRightX = i553[11]
  i552.uvBottomRightY = i553[12]
  i552.uvTopLeftX = i553[13]
  i552.uvTopLeftY = i553[14]
  i552.uvTopRightX = i553[15]
  i552.uvTopRightY = i553[16]
  return i552
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i554 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i555 = data
  i554.useSafeMode = !!i555[0]
  i554.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i555[1], i554.safeModeOptions)
  i554.timeScale = i555[2]
  i554.unscaledTimeScale = i555[3]
  i554.useSmoothDeltaTime = !!i555[4]
  i554.maxSmoothUnscaledTime = i555[5]
  i554.rewindCallbackMode = i555[6]
  i554.showUnityEditorReport = !!i555[7]
  i554.logBehaviour = i555[8]
  i554.drawGizmos = !!i555[9]
  i554.defaultRecyclable = !!i555[10]
  i554.defaultAutoPlay = i555[11]
  i554.defaultUpdateType = i555[12]
  i554.defaultTimeScaleIndependent = !!i555[13]
  i554.defaultEaseType = i555[14]
  i554.defaultEaseOvershootOrAmplitude = i555[15]
  i554.defaultEasePeriod = i555[16]
  i554.defaultAutoKill = !!i555[17]
  i554.defaultLoopType = i555[18]
  i554.debugMode = !!i555[19]
  i554.debugStoreTargetId = !!i555[20]
  i554.showPreviewPanel = !!i555[21]
  i554.storeSettingsLocation = i555[22]
  i554.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i555[23], i554.modules)
  i554.createASMDEF = !!i555[24]
  i554.showPlayingTweens = !!i555[25]
  i554.showPausedTweens = !!i555[26]
  return i554
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i556 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i557 = data
  i556.logBehaviour = i557[0]
  i556.nestedTweenFailureBehaviour = i557[1]
  return i556
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i558 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i559 = data
  i558.showPanel = !!i559[0]
  i558.audioEnabled = !!i559[1]
  i558.physicsEnabled = !!i559[2]
  i558.physics2DEnabled = !!i559[3]
  i558.spriteEnabled = !!i559[4]
  i558.uiEnabled = !!i559[5]
  i558.uiToolkitEnabled = !!i559[6]
  i558.textMeshProEnabled = !!i559[7]
  i558.tk2DEnabled = !!i559[8]
  i558.deAudioEnabled = !!i559[9]
  i558.deUnityExtendedEnabled = !!i559[10]
  i558.epoOutlineEnabled = !!i559[11]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i561 = data
  var i563 = i561[0]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i563[i + 0]) );
  }
  i560.files = i562
  i560.componentToPrefabIds = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i567 = data
  i566.path = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'unityObject')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i569 = data
  var i571 = i569[0]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i571[i + 0]) );
  }
  i568.scriptsExecutionOrder = i570
  var i573 = i569[1]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i573[i + 0]) );
  }
  i568.sortingLayers = i572
  var i575 = i569[2]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i575[i + 0]) );
  }
  i568.cullingLayers = i574
  i568.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i569[3], i568.timeSettings)
  i568.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i569[4], i568.physicsSettings)
  i568.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i569[5], i568.physics2DSettings)
  i568.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i569[6], i568.qualitySettings)
  i568.enableRealtimeShadows = !!i569[7]
  i568.enableAutoInstancing = !!i569[8]
  i568.enableStaticBatching = !!i569[9]
  i568.enableDynamicBatching = !!i569[10]
  i568.usePreservativeDynamicBatching = !!i569[11]
  i568.lightmapEncodingQuality = i569[12]
  i568.desiredColorSpace = i569[13]
  var i577 = i569[14]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( i577[i + 0] );
  }
  i568.allTags = i576
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i581 = data
  i580.name = i581[0]
  i580.value = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i585 = data
  i584.id = i585[0]
  i584.name = i585[1]
  i584.value = i585[2]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i589 = data
  i588.id = i589[0]
  i588.name = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i591 = data
  i590.fixedDeltaTime = i591[0]
  i590.maximumDeltaTime = i591[1]
  i590.timeScale = i591[2]
  i590.maximumParticleTimestep = i591[3]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i593 = data
  i592.gravity = new pc.Vec3( i593[0], i593[1], i593[2] )
  i592.defaultSolverIterations = i593[3]
  i592.bounceThreshold = i593[4]
  i592.autoSyncTransforms = !!i593[5]
  i592.autoSimulation = !!i593[6]
  var i595 = i593[7]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i595[i + 0]) );
  }
  i592.collisionMatrix = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i599 = data
  i598.enabled = !!i599[0]
  i598.layerId = i599[1]
  i598.otherLayerId = i599[2]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'material')
  i600.gravity = new pc.Vec2( i601[2], i601[3] )
  i600.positionIterations = i601[4]
  i600.velocityIterations = i601[5]
  i600.velocityThreshold = i601[6]
  i600.maxLinearCorrection = i601[7]
  i600.maxAngularCorrection = i601[8]
  i600.maxTranslationSpeed = i601[9]
  i600.maxRotationSpeed = i601[10]
  i600.baumgarteScale = i601[11]
  i600.baumgarteTOIScale = i601[12]
  i600.timeToSleep = i601[13]
  i600.linearSleepTolerance = i601[14]
  i600.angularSleepTolerance = i601[15]
  i600.defaultContactOffset = i601[16]
  i600.autoSimulation = !!i601[17]
  i600.queriesHitTriggers = !!i601[18]
  i600.queriesStartInColliders = !!i601[19]
  i600.callbacksOnDisable = !!i601[20]
  i600.reuseCollisionCallbacks = !!i601[21]
  i600.autoSyncTransforms = !!i601[22]
  var i603 = i601[23]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i603[i + 0]) );
  }
  i600.collisionMatrix = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i607 = data
  i606.enabled = !!i607[0]
  i606.layerId = i607[1]
  i606.otherLayerId = i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i609 = data
  var i611 = i609[0]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i611[i + 0]) );
  }
  i608.qualityLevels = i610
  var i613 = i609[1]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( i613[i + 0] );
  }
  i608.names = i612
  i608.shadows = i609[2]
  i608.anisotropicFiltering = i609[3]
  i608.antiAliasing = i609[4]
  i608.lodBias = i609[5]
  i608.shadowCascades = i609[6]
  i608.shadowDistance = i609[7]
  i608.shadowmaskMode = i609[8]
  i608.shadowProjection = i609[9]
  i608.shadowResolution = i609[10]
  i608.softParticles = !!i609[11]
  i608.softVegetation = !!i609[12]
  i608.activeColorSpace = i609[13]
  i608.desiredColorSpace = i609[14]
  i608.masterTextureLimit = i609[15]
  i608.maxQueuedFrames = i609[16]
  i608.particleRaycastBudget = i609[17]
  i608.pixelLightCount = i609[18]
  i608.realtimeReflectionProbes = !!i609[19]
  i608.shadowCascade2Split = i609[20]
  i608.shadowCascade4Split = new pc.Vec3( i609[21], i609[22], i609[23] )
  i608.streamingMipmapsActive = !!i609[24]
  i608.vSyncCount = i609[25]
  i608.asyncUploadBufferSize = i609[26]
  i608.asyncUploadTimeSlice = i609[27]
  i608.billboardsFaceCameraPosition = !!i609[28]
  i608.shadowNearPlaneOffset = i609[29]
  i608.streamingMipmapsMemoryBudget = i609[30]
  i608.maximumLODLevel = i609[31]
  i608.streamingMipmapsAddAllCameras = !!i609[32]
  i608.streamingMipmapsMaxLevelReduction = i609[33]
  i608.streamingMipmapsRenderersPerFrame = i609[34]
  i608.resolutionScalingFixedDPIFactor = i609[35]
  i608.streamingMipmapsMaxFileIORequests = i609[36]
  i608.currentQualityLevel = i609[37]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i619 = data
  i618.weight = i619[0]
  i618.vertices = i619[1]
  i618.normals = i619[2]
  i618.tangents = i619[3]
  return i618
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[1],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[1],"62":[6],"63":[64],"65":[64],"9":[8],"66":[23],"67":[9],"68":[8],"69":[1],"70":[1],"71":[3],"72":[8],"73":[13,8],"74":[6],"75":[13,8],"76":[8],"77":[8],"78":[6,8],"79":[8,13],"80":[81],"82":[81],"83":[81],"84":[8],"85":[8],"12":[9],"14":[13,8],"86":[8],"11":[9],"87":[8],"88":[8],"89":[8],"90":[8],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[13,8],"15":[8],"97":[8],"98":[8],"99":[8],"17":[13,8],"100":[8],"101":[23],"102":[23],"24":[23],"103":[23],"104":[1],"105":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.RectMask2D","UnityEngine.UI.Outline","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","GameManager3D","UnityEngine.MonoBehaviour","ReplayButtonHandler","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f1";

Deserializers.productName = "Unity Playworks CP 2";

Deserializers.lunaInitializationTime = "10/16/2026 11:01:40";

Deserializers.lunaDaysRunning = "20.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "DoTween-Playworks";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "483aba1aba7a7d042b13bf94490745cd";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.20.0\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1730";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4458";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "743ec847-7b4a-4618-99e5-bb1913ca4b60";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


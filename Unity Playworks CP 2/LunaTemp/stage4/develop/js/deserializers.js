var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.JointSpring' )
  var i313 = data
  i312.spring = i313[0]
  i312.damper = i313[1]
  i312.targetPosition = i313[2]
  return i312
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.JointMotor' )
  var i315 = data
  i314.m_TargetVelocity = i315[0]
  i314.m_Force = i315[1]
  i314.m_FreeSpin = i315[2]
  return i314
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.JointLimits' )
  var i317 = data
  i316.m_Min = i317[0]
  i316.m_Max = i317[1]
  i316.m_Bounciness = i317[2]
  i316.m_BounceMinVelocity = i317[3]
  i316.m_ContactDistance = i317[4]
  i316.minBounce = i317[5]
  i316.maxBounce = i317[6]
  return i316
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.JointDrive' )
  var i319 = data
  i318.m_PositionSpring = i319[0]
  i318.m_PositionDamper = i319[1]
  i318.m_MaximumForce = i319[2]
  i318.m_UseAcceleration = i319[3]
  return i318
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i321 = data
  i320.m_Spring = i321[0]
  i320.m_Damper = i321[1]
  return i320
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i323 = data
  i322.m_Limit = i323[0]
  i322.m_Bounciness = i323[1]
  i322.m_ContactDistance = i323[2]
  return i322
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i325 = data
  i324.m_ExtremumSlip = i325[0]
  i324.m_ExtremumValue = i325[1]
  i324.m_AsymptoteSlip = i325[2]
  i324.m_AsymptoteValue = i325[3]
  i324.m_Stiffness = i325[4]
  return i324
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i327 = data
  i326.m_LowerAngle = i327[0]
  i326.m_UpperAngle = i327[1]
  return i326
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i329 = data
  i328.m_MotorSpeed = i329[0]
  i328.m_MaximumMotorTorque = i329[1]
  return i328
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i331 = data
  i330.m_DampingRatio = i331[0]
  i330.m_Frequency = i331[1]
  i330.m_Angle = i331[2]
  return i330
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i333 = data
  i332.m_LowerTranslation = i333[0]
  i332.m_UpperTranslation = i333[1]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i335 = data
  i334.name = i335[0]
  i334.halfPrecision = !!i335[1]
  i334.useSimplification = !!i335[2]
  i334.useUInt32IndexFormat = !!i335[3]
  i334.vertexCount = i335[4]
  i334.aabb = i335[5]
  var i337 = i335[6]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( !!i337[i + 0] );
  }
  i334.streams = i336
  i334.vertices = i335[7]
  var i339 = i335[8]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i339[i + 0]) );
  }
  i334.subMeshes = i338
  var i341 = i335[9]
  var i340 = []
  for(var i = 0; i < i341.length; i += 16) {
    i340.push( new pc.Mat4().setData(i341[i + 0], i341[i + 1], i341[i + 2], i341[i + 3],  i341[i + 4], i341[i + 5], i341[i + 6], i341[i + 7],  i341[i + 8], i341[i + 9], i341[i + 10], i341[i + 11],  i341[i + 12], i341[i + 13], i341[i + 14], i341[i + 15]) );
  }
  i334.bindposes = i340
  var i343 = i335[10]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i343[i + 0]) );
  }
  i334.blendShapes = i342
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i349 = data
  i348.triangles = i349[0]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i355 = data
  i354.name = i355[0]
  var i357 = i355[1]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i357[i + 0]) );
  }
  i354.frames = i356
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i358 = root || new pc.UnityMaterial()
  var i359 = data
  i358.name = i359[0]
  request.r(i359[1], i359[2], 0, i358, 'shader')
  i358.renderQueue = i359[3]
  i358.enableInstancing = !!i359[4]
  var i361 = i359[5]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i361[i + 0]) );
  }
  i358.floatParameters = i360
  var i363 = i359[6]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i363[i + 0]) );
  }
  i358.colorParameters = i362
  var i365 = i359[7]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i365[i + 0]) );
  }
  i358.vectorParameters = i364
  var i367 = i359[8]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i367[i + 0]) );
  }
  i358.textureParameters = i366
  var i369 = i359[9]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i369[i + 0]) );
  }
  i358.materialFlags = i368
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i373 = data
  i372.name = i373[0]
  i372.value = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i377 = data
  i376.name = i377[0]
  i376.value = new pc.Color(i377[1], i377[2], i377[3], i377[4])
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i381 = data
  i380.name = i381[0]
  i380.value = new pc.Vec4( i381[1], i381[2], i381[3], i381[4] )
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i385 = data
  i384.name = i385[0]
  request.r(i385[1], i385[2], 0, i384, 'value')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i389 = data
  i388.name = i389[0]
  i388.enabled = !!i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i391 = data
  i390.name = i391[0]
  i390.width = i391[1]
  i390.height = i391[2]
  i390.mipmapCount = i391[3]
  i390.anisoLevel = i391[4]
  i390.filterMode = i391[5]
  i390.hdr = !!i391[6]
  i390.format = i391[7]
  i390.wrapMode = i391[8]
  i390.alphaIsTransparency = !!i391[9]
  i390.alphaSource = i391[10]
  i390.graphicsFormat = i391[11]
  i390.sRGBTexture = !!i391[12]
  i390.desiredColorSpace = i391[13]
  i390.wrapU = i391[14]
  i390.wrapV = i391[15]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i393 = data
  i392.name = i393[0]
  i392.atlasId = i393[1]
  i392.mipmapCount = i393[2]
  i392.hdr = !!i393[3]
  i392.size = i393[4]
  i392.anisoLevel = i393[5]
  i392.filterMode = i393[6]
  var i395 = i393[7]
  var i394 = []
  for(var i = 0; i < i395.length; i += 4) {
    i394.push( UnityEngine.Rect.MinMaxRect(i395[i + 0], i395[i + 1], i395[i + 2], i395[i + 3]) );
  }
  i392.rects = i394
  i392.wrapU = i393[8]
  i392.wrapV = i393[9]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i399 = data
  i398.name = i399[0]
  i398.index = i399[1]
  i398.startup = !!i399[2]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i401 = data
  i400.aspect = i401[0]
  i400.orthographic = !!i401[1]
  i400.orthographicSize = i401[2]
  i400.backgroundColor = new pc.Color(i401[3], i401[4], i401[5], i401[6])
  i400.nearClipPlane = i401[7]
  i400.farClipPlane = i401[8]
  i400.fieldOfView = i401[9]
  i400.depth = i401[10]
  i400.clearFlags = i401[11]
  i400.cullingMask = i401[12]
  i400.rect = i401[13]
  request.r(i401[14], i401[15], 0, i400, 'targetTexture')
  i400.usePhysicalProperties = !!i401[16]
  i400.focalLength = i401[17]
  i400.sensorSize = new pc.Vec2( i401[18], i401[19] )
  i400.lensShift = new pc.Vec2( i401[20], i401[21] )
  i400.gateFit = i401[22]
  i400.commandBufferCount = i401[23]
  i400.cameraType = i401[24]
  i400.enabled = !!i401[25]
  return i400
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i403 = data
  i402.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i403[0] )
  i402.m_MaxRayIntersections = i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i405 = data
  i404.name = i405[0]
  i404.tagId = i405[1]
  i404.enabled = !!i405[2]
  i404.isStatic = !!i405[3]
  i404.layer = i405[4]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i407 = data
  i406.type = i407[0]
  i406.color = new pc.Color(i407[1], i407[2], i407[3], i407[4])
  i406.cullingMask = i407[5]
  i406.intensity = i407[6]
  i406.range = i407[7]
  i406.spotAngle = i407[8]
  i406.shadows = i407[9]
  i406.shadowNormalBias = i407[10]
  i406.shadowBias = i407[11]
  i406.shadowStrength = i407[12]
  i406.shadowResolution = i407[13]
  i406.lightmapBakeType = i407[14]
  i406.renderMode = i407[15]
  request.r(i407[16], i407[17], 0, i406, 'cookie')
  i406.cookieSize = i407[18]
  i406.shadowNearPlane = i407[19]
  i406.occlusionMaskChannel = i407[20]
  i406.isBaked = !!i407[21]
  i406.mixedLightingMode = i407[22]
  i406.enabled = !!i407[23]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'sharedMesh')
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i411 = data
  i410.center = new pc.Vec3( i411[0], i411[1], i411[2] )
  i410.radius = i411[3]
  i410.height = i411[4]
  i410.direction = i411[5]
  i410.enabled = !!i411[6]
  i410.isTrigger = !!i411[7]
  request.r(i411[8], i411[9], 0, i410, 'material')
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'additionalVertexStreams')
  i412.enabled = !!i413[2]
  request.r(i413[3], i413[4], 0, i412, 'sharedMaterial')
  var i415 = i413[5]
  var i414 = []
  for(var i = 0; i < i415.length; i += 2) {
  request.r(i415[i + 0], i415[i + 1], 2, i414, '')
  }
  i412.sharedMaterials = i414
  i412.receiveShadows = !!i413[6]
  i412.shadowCastingMode = i413[7]
  i412.sortingLayerID = i413[8]
  i412.sortingOrder = i413[9]
  i412.lightmapIndex = i413[10]
  i412.lightmapSceneIndex = i413[11]
  i412.lightmapScaleOffset = new pc.Vec4( i413[12], i413[13], i413[14], i413[15] )
  i412.lightProbeUsage = i413[16]
  i412.reflectionProbeUsage = i413[17]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i419 = data
  i418.center = new pc.Vec3( i419[0], i419[1], i419[2] )
  i418.size = new pc.Vec3( i419[3], i419[4], i419[5] )
  i418.enabled = !!i419[6]
  i418.isTrigger = !!i419[7]
  request.r(i419[8], i419[9], 0, i418, 'material')
  return i418
}

Deserializers["ChestClickable"] = function (request, data, root) {
  var i420 = root || request.c( 'ChestClickable' )
  var i421 = data
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i423 = data
  i422.pivot = new pc.Vec2( i423[0], i423[1] )
  i422.anchorMin = new pc.Vec2( i423[2], i423[3] )
  i422.anchorMax = new pc.Vec2( i423[4], i423[5] )
  i422.sizeDelta = new pc.Vec2( i423[6], i423[7] )
  i422.anchoredPosition3D = new pc.Vec3( i423[8], i423[9], i423[10] )
  i422.rotation = new pc.Quat(i423[11], i423[12], i423[13], i423[14])
  i422.scale = new pc.Vec3( i423[15], i423[16], i423[17] )
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i425 = data
  i424.planeDistance = i425[0]
  i424.referencePixelsPerUnit = i425[1]
  i424.isFallbackOverlay = !!i425[2]
  i424.renderMode = i425[3]
  i424.renderOrder = i425[4]
  i424.sortingLayerName = i425[5]
  i424.sortingOrder = i425[6]
  i424.scaleFactor = i425[7]
  request.r(i425[8], i425[9], 0, i424, 'worldCamera')
  i424.overrideSorting = !!i425[10]
  i424.pixelPerfect = !!i425[11]
  i424.targetDisplay = i425[12]
  i424.overridePixelPerfect = !!i425[13]
  i424.enabled = !!i425[14]
  return i424
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i427 = data
  i426.m_UiScaleMode = i427[0]
  i426.m_ReferencePixelsPerUnit = i427[1]
  i426.m_ScaleFactor = i427[2]
  i426.m_ReferenceResolution = new pc.Vec2( i427[3], i427[4] )
  i426.m_ScreenMatchMode = i427[5]
  i426.m_MatchWidthOrHeight = i427[6]
  i426.m_PhysicalUnit = i427[7]
  i426.m_FallbackScreenDPI = i427[8]
  i426.m_DefaultSpriteDPI = i427[9]
  i426.m_DynamicPixelsPerUnit = i427[10]
  i426.m_PresetInfoIsWorld = !!i427[11]
  return i426
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i429 = data
  i428.m_IgnoreReversedGraphics = !!i429[0]
  i428.m_BlockingObjects = i429[1]
  i428.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i429[2] )
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i431 = data
  i430.cullTransparentMesh = !!i431[0]
  return i430
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Image' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'm_Sprite')
  i432.m_Type = i433[2]
  i432.m_PreserveAspect = !!i433[3]
  i432.m_FillCenter = !!i433[4]
  i432.m_FillMethod = i433[5]
  i432.m_FillAmount = i433[6]
  i432.m_FillClockwise = !!i433[7]
  i432.m_FillOrigin = i433[8]
  i432.m_UseSpriteMesh = !!i433[9]
  i432.m_PixelsPerUnitMultiplier = i433[10]
  request.r(i433[11], i433[12], 0, i432, 'm_Material')
  i432.m_Maskable = !!i433[13]
  i432.m_Color = new pc.Color(i433[14], i433[15], i433[16], i433[17])
  i432.m_RaycastTarget = !!i433[18]
  i432.m_RaycastPadding = new pc.Vec4( i433[19], i433[20], i433[21], i433[22] )
  return i432
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.Text' )
  var i435 = data
  i434.m_FontData = request.d('UnityEngine.UI.FontData', i435[0], i434.m_FontData)
  i434.m_Text = i435[1]
  request.r(i435[2], i435[3], 0, i434, 'm_Material')
  i434.m_Maskable = !!i435[4]
  i434.m_Color = new pc.Color(i435[5], i435[6], i435[7], i435[8])
  i434.m_RaycastTarget = !!i435[9]
  i434.m_RaycastPadding = new pc.Vec4( i435[10], i435[11], i435[12], i435[13] )
  return i434
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.UI.FontData' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'm_Font')
  i436.m_FontSize = i437[2]
  i436.m_FontStyle = i437[3]
  i436.m_BestFit = !!i437[4]
  i436.m_MinSize = i437[5]
  i436.m_MaxSize = i437[6]
  i436.m_Alignment = i437[7]
  i436.m_AlignByGeometry = !!i437[8]
  i436.m_RichText = !!i437[9]
  i436.m_HorizontalOverflow = i437[10]
  i436.m_VerticalOverflow = i437[11]
  i436.m_LineSpacing = i437[12]
  return i436
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.UI.Button' )
  var i439 = data
  i438.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i439[0], i438.m_OnClick)
  i438.m_Navigation = request.d('UnityEngine.UI.Navigation', i439[1], i438.m_Navigation)
  i438.m_Transition = i439[2]
  i438.m_Colors = request.d('UnityEngine.UI.ColorBlock', i439[3], i438.m_Colors)
  i438.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i439[4], i438.m_SpriteState)
  i438.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i439[5], i438.m_AnimationTriggers)
  i438.m_Interactable = !!i439[6]
  request.r(i439[7], i439[8], 0, i438, 'm_TargetGraphic')
  return i438
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i441 = data
  i440.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i441[0], i440.m_PersistentCalls)
  return i440
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i443 = data
  var i445 = i443[0]
  var i444 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i445.length; i += 1) {
    i444.add(request.d('UnityEngine.Events.PersistentCall', i445[i + 0]));
  }
  i442.m_Calls = i444
  return i442
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'm_Target')
  i448.m_TargetAssemblyTypeName = i449[2]
  i448.m_MethodName = i449[3]
  i448.m_Mode = i449[4]
  i448.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i449[5], i448.m_Arguments)
  i448.m_CallState = i449[6]
  return i448
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i451 = data
  i450.m_Mode = i451[0]
  i450.m_WrapAround = !!i451[1]
  request.r(i451[2], i451[3], 0, i450, 'm_SelectOnUp')
  request.r(i451[4], i451[5], 0, i450, 'm_SelectOnDown')
  request.r(i451[6], i451[7], 0, i450, 'm_SelectOnLeft')
  request.r(i451[8], i451[9], 0, i450, 'm_SelectOnRight')
  return i450
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i453 = data
  i452.m_NormalColor = new pc.Color(i453[0], i453[1], i453[2], i453[3])
  i452.m_HighlightedColor = new pc.Color(i453[4], i453[5], i453[6], i453[7])
  i452.m_PressedColor = new pc.Color(i453[8], i453[9], i453[10], i453[11])
  i452.m_SelectedColor = new pc.Color(i453[12], i453[13], i453[14], i453[15])
  i452.m_DisabledColor = new pc.Color(i453[16], i453[17], i453[18], i453[19])
  i452.m_ColorMultiplier = i453[20]
  i452.m_FadeDuration = i453[21]
  return i452
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i455 = data
  request.r(i455[0], i455[1], 0, i454, 'm_HighlightedSprite')
  request.r(i455[2], i455[3], 0, i454, 'm_PressedSprite')
  request.r(i455[4], i455[5], 0, i454, 'm_SelectedSprite')
  request.r(i455[6], i455[7], 0, i454, 'm_DisabledSprite')
  return i454
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i457 = data
  i456.m_NormalTrigger = i457[0]
  i456.m_HighlightedTrigger = i457[1]
  i456.m_PressedTrigger = i457[2]
  i456.m_SelectedTrigger = i457[3]
  i456.m_DisabledTrigger = i457[4]
  return i456
}

Deserializers["ReplayButtonHandler"] = function (request, data, root) {
  var i458 = root || request.c( 'ReplayButtonHandler' )
  var i459 = data
  return i458
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'm_FirstSelected')
  i460.m_sendNavigationEvents = !!i461[2]
  i460.m_DragThreshold = i461[3]
  return i460
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i463 = data
  i462.m_HorizontalAxis = i463[0]
  i462.m_VerticalAxis = i463[1]
  i462.m_SubmitButton = i463[2]
  i462.m_CancelButton = i463[3]
  i462.m_InputActionsPerSecond = i463[4]
  i462.m_RepeatDelay = i463[5]
  i462.m_ForceModuleActive = !!i463[6]
  i462.m_SendPointerHoverToParent = !!i463[7]
  return i462
}

Deserializers["GameManager3D"] = function (request, data, root) {
  var i464 = root || request.c( 'GameManager3D' )
  var i465 = data
  request.r(i465[0], i465[1], 0, i464, 'mainCamera')
  request.r(i465[2], i465[3], 0, i464, 'chestRoot')
  request.r(i465[4], i465[5], 0, i464, 'chestLid')
  request.r(i465[6], i465[7], 0, i464, 'scoreText')
  request.r(i465[8], i465[9], 0, i464, 'comboText')
  request.r(i465[10], i465[11], 0, i464, 'progressFillRect')
  request.r(i465[12], i465[13], 0, i464, 'progressLabel')
  request.r(i465[14], i465[15], 0, i464, 'tutorialHand')
  request.r(i465[16], i465[17], 0, i464, 'scoreIconRect')
  request.r(i465[18], i465[19], 0, i464, 'scorePanelRect')
  request.r(i465[20], i465[21], 0, i464, 'scoreFillRect')
  request.r(i465[22], i465[23], 0, i464, 'scoreFillImage')
  request.r(i465[24], i465[25], 0, i464, 'uiVfxRoot')
  request.r(i465[26], i465[27], 0, i464, 'victoryPanel')
  request.r(i465[28], i465[29], 0, i464, 'victoryCard')
  request.r(i465[30], i465[31], 0, i464, 'victoryScoreText')
  var i467 = i465[32]
  var i466 = []
  for(var i = 0; i < i467.length; i += 2) {
  request.r(i467[i + 0], i467[i + 1], 2, i466, '')
  }
  i464.starImages = i466
  request.r(i465[33], i465[34], 0, i464, 'replayButton')
  i464.targetProgress = i465[35]
  i464.pointsPerHit = i465[36]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i471 = data
  i470.ambientIntensity = i471[0]
  i470.reflectionIntensity = i471[1]
  i470.ambientMode = i471[2]
  i470.ambientLight = new pc.Color(i471[3], i471[4], i471[5], i471[6])
  i470.ambientSkyColor = new pc.Color(i471[7], i471[8], i471[9], i471[10])
  i470.ambientGroundColor = new pc.Color(i471[11], i471[12], i471[13], i471[14])
  i470.ambientEquatorColor = new pc.Color(i471[15], i471[16], i471[17], i471[18])
  i470.fogColor = new pc.Color(i471[19], i471[20], i471[21], i471[22])
  i470.fogEndDistance = i471[23]
  i470.fogStartDistance = i471[24]
  i470.fogDensity = i471[25]
  i470.fog = !!i471[26]
  request.r(i471[27], i471[28], 0, i470, 'skybox')
  i470.fogMode = i471[29]
  var i473 = i471[30]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i473[i + 0]) );
  }
  i470.lightmaps = i472
  i470.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i471[31], i470.lightProbes)
  i470.lightmapsMode = i471[32]
  i470.mixedBakeMode = i471[33]
  i470.environmentLightingMode = i471[34]
  i470.ambientProbe = new pc.SphericalHarmonicsL2(i471[35])
  request.r(i471[36], i471[37], 0, i470, 'customReflection')
  request.r(i471[38], i471[39], 0, i470, 'defaultReflection')
  i470.defaultReflectionMode = i471[40]
  i470.defaultReflectionResolution = i471[41]
  i470.sunLightObjectId = i471[42]
  i470.pixelLightCount = i471[43]
  i470.defaultReflectionHDR = !!i471[44]
  i470.hasLightDataAsset = !!i471[45]
  i470.hasManualGenerate = !!i471[46]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'lightmapColor')
  request.r(i477[2], i477[3], 0, i476, 'lightmapDirection')
  request.r(i477[4], i477[5], 0, i476, 'shadowMask')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i478 = root || new UnityEngine.LightProbes()
  var i479 = data
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i487 = data
  var i489 = i487[0]
  var i488 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i489.length; i += 1) {
    i488.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i489[i + 0]));
  }
  i486.ShaderCompilationErrors = i488
  i486.name = i487[1]
  i486.guid = i487[2]
  var i491 = i487[3]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( i491[i + 0] );
  }
  i486.shaderDefinedKeywords = i490
  var i493 = i487[4]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i493[i + 0]) );
  }
  i486.passes = i492
  var i495 = i487[5]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i495[i + 0]) );
  }
  i486.usePasses = i494
  var i497 = i487[6]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i497[i + 0]) );
  }
  i486.defaultParameterValues = i496
  request.r(i487[7], i487[8], 0, i486, 'unityFallbackShader')
  i486.readDepth = !!i487[9]
  i486.hasDepthOnlyPass = !!i487[10]
  i486.isCreatedByShaderGraph = !!i487[11]
  i486.disableBatching = !!i487[12]
  i486.compiled = !!i487[13]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i501 = data
  i500.shaderName = i501[0]
  i500.errorMessage = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i506 = root || new pc.UnityShaderPass()
  var i507 = data
  i506.id = i507[0]
  i506.subShaderIndex = i507[1]
  i506.name = i507[2]
  i506.passType = i507[3]
  i506.grabPassTextureName = i507[4]
  i506.usePass = !!i507[5]
  i506.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[6], i506.zTest)
  i506.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[7], i506.zWrite)
  i506.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[8], i506.culling)
  i506.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i507[9], i506.blending)
  i506.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i507[10], i506.alphaBlending)
  i506.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[11], i506.colorWriteMask)
  i506.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[12], i506.offsetUnits)
  i506.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[13], i506.offsetFactor)
  i506.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[14], i506.stencilRef)
  i506.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[15], i506.stencilReadMask)
  i506.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i507[16], i506.stencilWriteMask)
  i506.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i507[17], i506.stencilOp)
  i506.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i507[18], i506.stencilOpFront)
  i506.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i507[19], i506.stencilOpBack)
  var i509 = i507[20]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i509[i + 0]) );
  }
  i506.tags = i508
  var i511 = i507[21]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( i511[i + 0] );
  }
  i506.passDefinedKeywords = i510
  var i513 = i507[22]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i513[i + 0]) );
  }
  i506.passDefinedKeywordGroups = i512
  var i515 = i507[23]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i515[i + 0]) );
  }
  i506.variants = i514
  var i517 = i507[24]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i517[i + 0]) );
  }
  i506.excludedVariants = i516
  i506.hasDepthReader = !!i507[25]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i519 = data
  i518.val = i519[0]
  i518.name = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i521 = data
  i520.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[0], i520.src)
  i520.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[1], i520.dst)
  i520.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i521[2], i520.op)
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i523 = data
  i522.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[0], i522.pass)
  i522.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[1], i522.fail)
  i522.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[2], i522.zFail)
  i522.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[3], i522.comp)
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i527 = data
  i526.name = i527[0]
  i526.value = i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i531 = data
  var i533 = i531[0]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( i533[i + 0] );
  }
  i530.keywords = i532
  i530.hasDiscard = !!i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i537 = data
  i536.passId = i537[0]
  i536.subShaderIndex = i537[1]
  var i539 = i537[2]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( i539[i + 0] );
  }
  i536.keywords = i538
  i536.vertexProgram = i537[3]
  i536.fragmentProgram = i537[4]
  i536.exportedForWebGl2 = !!i537[5]
  i536.readDepth = !!i537[6]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'shader')
  i542.pass = i543[2]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i547 = data
  i546.name = i547[0]
  i546.type = i547[1]
  i546.value = new pc.Vec4( i547[2], i547[3], i547[4], i547[5] )
  i546.textureValue = i547[6]
  i546.shaderPropertyFlag = i547[7]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i549 = data
  i548.name = i549[0]
  i548.ascent = i549[1]
  i548.originalLineHeight = i549[2]
  i548.fontSize = i549[3]
  var i551 = i549[4]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i551[i + 0]) );
  }
  i548.characterInfo = i550
  request.r(i549[5], i549[6], 0, i548, 'texture')
  i548.originalFontSize = i549[7]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i555 = data
  i554.index = i555[0]
  i554.advance = i555[1]
  i554.bearing = i555[2]
  i554.glyphWidth = i555[3]
  i554.glyphHeight = i555[4]
  i554.minX = i555[5]
  i554.maxX = i555[6]
  i554.minY = i555[7]
  i554.maxY = i555[8]
  i554.uvBottomLeftX = i555[9]
  i554.uvBottomLeftY = i555[10]
  i554.uvBottomRightX = i555[11]
  i554.uvBottomRightY = i555[12]
  i554.uvTopLeftX = i555[13]
  i554.uvTopLeftY = i555[14]
  i554.uvTopRightX = i555[15]
  i554.uvTopRightY = i555[16]
  return i554
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i556 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i557 = data
  i556.useSafeMode = !!i557[0]
  i556.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i557[1], i556.safeModeOptions)
  i556.timeScale = i557[2]
  i556.unscaledTimeScale = i557[3]
  i556.useSmoothDeltaTime = !!i557[4]
  i556.maxSmoothUnscaledTime = i557[5]
  i556.rewindCallbackMode = i557[6]
  i556.showUnityEditorReport = !!i557[7]
  i556.logBehaviour = i557[8]
  i556.drawGizmos = !!i557[9]
  i556.defaultRecyclable = !!i557[10]
  i556.defaultAutoPlay = i557[11]
  i556.defaultUpdateType = i557[12]
  i556.defaultTimeScaleIndependent = !!i557[13]
  i556.defaultEaseType = i557[14]
  i556.defaultEaseOvershootOrAmplitude = i557[15]
  i556.defaultEasePeriod = i557[16]
  i556.defaultAutoKill = !!i557[17]
  i556.defaultLoopType = i557[18]
  i556.debugMode = !!i557[19]
  i556.debugStoreTargetId = !!i557[20]
  i556.showPreviewPanel = !!i557[21]
  i556.storeSettingsLocation = i557[22]
  i556.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i557[23], i556.modules)
  i556.createASMDEF = !!i557[24]
  i556.showPlayingTweens = !!i557[25]
  i556.showPausedTweens = !!i557[26]
  return i556
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i558 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i559 = data
  i558.logBehaviour = i559[0]
  i558.nestedTweenFailureBehaviour = i559[1]
  return i558
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i560 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i561 = data
  i560.showPanel = !!i561[0]
  i560.audioEnabled = !!i561[1]
  i560.physicsEnabled = !!i561[2]
  i560.physics2DEnabled = !!i561[3]
  i560.spriteEnabled = !!i561[4]
  i560.uiEnabled = !!i561[5]
  i560.uiToolkitEnabled = !!i561[6]
  i560.textMeshProEnabled = !!i561[7]
  i560.tk2DEnabled = !!i561[8]
  i560.deAudioEnabled = !!i561[9]
  i560.deUnityExtendedEnabled = !!i561[10]
  i560.epoOutlineEnabled = !!i561[11]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i563 = data
  var i565 = i563[0]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i565[i + 0]) );
  }
  i562.files = i564
  i562.componentToPrefabIds = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i569 = data
  i568.path = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'unityObject')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i571 = data
  var i573 = i571[0]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i573[i + 0]) );
  }
  i570.scriptsExecutionOrder = i572
  var i575 = i571[1]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i575[i + 0]) );
  }
  i570.sortingLayers = i574
  var i577 = i571[2]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i577[i + 0]) );
  }
  i570.cullingLayers = i576
  i570.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i571[3], i570.timeSettings)
  i570.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i571[4], i570.physicsSettings)
  i570.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i571[5], i570.physics2DSettings)
  i570.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i571[6], i570.qualitySettings)
  i570.enableRealtimeShadows = !!i571[7]
  i570.enableAutoInstancing = !!i571[8]
  i570.enableStaticBatching = !!i571[9]
  i570.enableDynamicBatching = !!i571[10]
  i570.usePreservativeDynamicBatching = !!i571[11]
  i570.lightmapEncodingQuality = i571[12]
  i570.desiredColorSpace = i571[13]
  var i579 = i571[14]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i570.allTags = i578
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i583 = data
  i582.name = i583[0]
  i582.value = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i587 = data
  i586.id = i587[0]
  i586.name = i587[1]
  i586.value = i587[2]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i591 = data
  i590.id = i591[0]
  i590.name = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i593 = data
  i592.fixedDeltaTime = i593[0]
  i592.maximumDeltaTime = i593[1]
  i592.timeScale = i593[2]
  i592.maximumParticleTimestep = i593[3]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i595 = data
  i594.gravity = new pc.Vec3( i595[0], i595[1], i595[2] )
  i594.defaultSolverIterations = i595[3]
  i594.bounceThreshold = i595[4]
  i594.autoSyncTransforms = !!i595[5]
  i594.autoSimulation = !!i595[6]
  var i597 = i595[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i597[i + 0]) );
  }
  i594.collisionMatrix = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i601 = data
  i600.enabled = !!i601[0]
  i600.layerId = i601[1]
  i600.otherLayerId = i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'material')
  i602.gravity = new pc.Vec2( i603[2], i603[3] )
  i602.positionIterations = i603[4]
  i602.velocityIterations = i603[5]
  i602.velocityThreshold = i603[6]
  i602.maxLinearCorrection = i603[7]
  i602.maxAngularCorrection = i603[8]
  i602.maxTranslationSpeed = i603[9]
  i602.maxRotationSpeed = i603[10]
  i602.baumgarteScale = i603[11]
  i602.baumgarteTOIScale = i603[12]
  i602.timeToSleep = i603[13]
  i602.linearSleepTolerance = i603[14]
  i602.angularSleepTolerance = i603[15]
  i602.defaultContactOffset = i603[16]
  i602.autoSimulation = !!i603[17]
  i602.queriesHitTriggers = !!i603[18]
  i602.queriesStartInColliders = !!i603[19]
  i602.callbacksOnDisable = !!i603[20]
  i602.reuseCollisionCallbacks = !!i603[21]
  i602.autoSyncTransforms = !!i603[22]
  var i605 = i603[23]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i605[i + 0]) );
  }
  i602.collisionMatrix = i604
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i609 = data
  i608.enabled = !!i609[0]
  i608.layerId = i609[1]
  i608.otherLayerId = i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i611 = data
  var i613 = i611[0]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i613[i + 0]) );
  }
  i610.qualityLevels = i612
  var i615 = i611[1]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( i615[i + 0] );
  }
  i610.names = i614
  i610.shadows = i611[2]
  i610.anisotropicFiltering = i611[3]
  i610.antiAliasing = i611[4]
  i610.lodBias = i611[5]
  i610.shadowCascades = i611[6]
  i610.shadowDistance = i611[7]
  i610.shadowmaskMode = i611[8]
  i610.shadowProjection = i611[9]
  i610.shadowResolution = i611[10]
  i610.softParticles = !!i611[11]
  i610.softVegetation = !!i611[12]
  i610.activeColorSpace = i611[13]
  i610.desiredColorSpace = i611[14]
  i610.masterTextureLimit = i611[15]
  i610.maxQueuedFrames = i611[16]
  i610.particleRaycastBudget = i611[17]
  i610.pixelLightCount = i611[18]
  i610.realtimeReflectionProbes = !!i611[19]
  i610.shadowCascade2Split = i611[20]
  i610.shadowCascade4Split = new pc.Vec3( i611[21], i611[22], i611[23] )
  i610.streamingMipmapsActive = !!i611[24]
  i610.vSyncCount = i611[25]
  i610.asyncUploadBufferSize = i611[26]
  i610.asyncUploadTimeSlice = i611[27]
  i610.billboardsFaceCameraPosition = !!i611[28]
  i610.shadowNearPlaneOffset = i611[29]
  i610.streamingMipmapsMemoryBudget = i611[30]
  i610.maximumLODLevel = i611[31]
  i610.streamingMipmapsAddAllCameras = !!i611[32]
  i610.streamingMipmapsMaxLevelReduction = i611[33]
  i610.streamingMipmapsRenderersPerFrame = i611[34]
  i610.resolutionScalingFixedDPIFactor = i611[35]
  i610.streamingMipmapsMaxFileIORequests = i611[36]
  i610.currentQualityLevel = i611[37]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i621 = data
  i620.weight = i621[0]
  i620.vertices = i621[1]
  i620.normals = i621[2]
  i620.tangents = i621[3]
  return i620
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'm_ObjectArgument')
  i622.m_ObjectArgumentAssemblyTypeName = i623[2]
  i622.m_IntArgument = i623[3]
  i622.m_FloatArgument = i623[4]
  i622.m_StringArgument = i623[5]
  i622.m_BoolArgument = !!i623[6]
  return i622
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[40],"41":[1],"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[1],"64":[9],"65":[66],"67":[66],"15":[14],"68":[24],"69":[15],"70":[14],"71":[1],"72":[1],"73":[5],"74":[14],"75":[18,14],"76":[9],"77":[18,14],"78":[14],"79":[14],"80":[9,14],"81":[14,18],"82":[83],"84":[83],"85":[83],"86":[14],"87":[14],"17":[15],"19":[18,14],"88":[14],"16":[15],"89":[14],"90":[14],"91":[14],"92":[14],"93":[14],"94":[14],"95":[14],"96":[14],"97":[14],"98":[18,14],"99":[14],"100":[14],"101":[14],"102":[14],"20":[18,14],"103":[14],"104":[24],"105":[24],"25":[24],"106":[24],"107":[1],"4":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.CapsuleCollider","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","ChestClickable","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","ReplayButtonHandler","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager3D","UnityEngine.Transform","UnityEngine.GameObject","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster"]

Deserializers.unityVersion = "6000.0.85f1";

Deserializers.productName = "Unity Playworks CP 2";

Deserializers.lunaInitializationTime = "10/16/2026 11:01:40";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "DOTween-3D-Playable";

Deserializers.lunaAppID = "43564";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4467";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "2e8f5bc0-2c1c-480a-9b7c-23f4246c67b7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


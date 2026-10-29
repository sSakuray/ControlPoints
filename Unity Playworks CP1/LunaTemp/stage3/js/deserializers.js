var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.JointSpring' )
  var i1231 = data
  i1230.spring = i1231[0]
  i1230.damper = i1231[1]
  i1230.targetPosition = i1231[2]
  return i1230
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.JointMotor' )
  var i1233 = data
  i1232.m_TargetVelocity = i1233[0]
  i1232.m_Force = i1233[1]
  i1232.m_FreeSpin = i1233[2]
  return i1232
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.JointLimits' )
  var i1235 = data
  i1234.m_Min = i1235[0]
  i1234.m_Max = i1235[1]
  i1234.m_Bounciness = i1235[2]
  i1234.m_BounceMinVelocity = i1235[3]
  i1234.m_ContactDistance = i1235[4]
  i1234.minBounce = i1235[5]
  i1234.maxBounce = i1235[6]
  return i1234
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.JointDrive' )
  var i1237 = data
  i1236.m_PositionSpring = i1237[0]
  i1236.m_PositionDamper = i1237[1]
  i1236.m_MaximumForce = i1237[2]
  i1236.m_UseAcceleration = i1237[3]
  return i1236
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1239 = data
  i1238.m_Spring = i1239[0]
  i1238.m_Damper = i1239[1]
  return i1238
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1241 = data
  i1240.m_Limit = i1241[0]
  i1240.m_Bounciness = i1241[1]
  i1240.m_ContactDistance = i1241[2]
  return i1240
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1243 = data
  i1242.m_ExtremumSlip = i1243[0]
  i1242.m_ExtremumValue = i1243[1]
  i1242.m_AsymptoteSlip = i1243[2]
  i1242.m_AsymptoteValue = i1243[3]
  i1242.m_Stiffness = i1243[4]
  return i1242
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1245 = data
  i1244.m_LowerAngle = i1245[0]
  i1244.m_UpperAngle = i1245[1]
  return i1244
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1247 = data
  i1246.m_MotorSpeed = i1247[0]
  i1246.m_MaximumMotorTorque = i1247[1]
  return i1246
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1249 = data
  i1248.m_DampingRatio = i1249[0]
  i1248.m_Frequency = i1249[1]
  i1248.m_Angle = i1249[2]
  return i1248
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1251 = data
  i1250.m_LowerTranslation = i1251[0]
  i1250.m_UpperTranslation = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1252 = root || new pc.UnityMaterial()
  var i1253 = data
  i1252.name = i1253[0]
  request.r(i1253[1], i1253[2], 0, i1252, 'shader')
  i1252.renderQueue = i1253[3]
  i1252.enableInstancing = !!i1253[4]
  var i1255 = i1253[5]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1255[i + 0]) );
  }
  i1252.floatParameters = i1254
  var i1257 = i1253[6]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1257[i + 0]) );
  }
  i1252.colorParameters = i1256
  var i1259 = i1253[7]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1259[i + 0]) );
  }
  i1252.vectorParameters = i1258
  var i1261 = i1253[8]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1261[i + 0]) );
  }
  i1252.textureParameters = i1260
  var i1263 = i1253[9]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1263[i + 0]) );
  }
  i1252.materialFlags = i1262
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.value = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.value = new pc.Color(i1271[1], i1271[2], i1271[3], i1271[4])
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1275 = data
  i1274.name = i1275[0]
  i1274.value = new pc.Vec4( i1275[1], i1275[2], i1275[3], i1275[4] )
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1279 = data
  i1278.name = i1279[0]
  request.r(i1279[1], i1279[2], 0, i1278, 'value')
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.enabled = !!i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1285 = data
  i1284.name = i1285[0]
  i1284.width = i1285[1]
  i1284.height = i1285[2]
  i1284.mipmapCount = i1285[3]
  i1284.anisoLevel = i1285[4]
  i1284.filterMode = i1285[5]
  i1284.hdr = !!i1285[6]
  i1284.format = i1285[7]
  i1284.wrapMode = i1285[8]
  i1284.alphaIsTransparency = !!i1285[9]
  i1284.alphaSource = i1285[10]
  i1284.graphicsFormat = i1285[11]
  i1284.sRGBTexture = !!i1285[12]
  i1284.desiredColorSpace = i1285[13]
  i1284.wrapU = i1285[14]
  i1284.wrapV = i1285[15]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.index = i1287[1]
  i1286.startup = !!i1287[2]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1289 = data
  i1288.aspect = i1289[0]
  i1288.orthographic = !!i1289[1]
  i1288.orthographicSize = i1289[2]
  i1288.backgroundColor = new pc.Color(i1289[3], i1289[4], i1289[5], i1289[6])
  i1288.nearClipPlane = i1289[7]
  i1288.farClipPlane = i1289[8]
  i1288.fieldOfView = i1289[9]
  i1288.depth = i1289[10]
  i1288.clearFlags = i1289[11]
  i1288.cullingMask = i1289[12]
  i1288.rect = i1289[13]
  request.r(i1289[14], i1289[15], 0, i1288, 'targetTexture')
  i1288.usePhysicalProperties = !!i1289[16]
  i1288.focalLength = i1289[17]
  i1288.sensorSize = new pc.Vec2( i1289[18], i1289[19] )
  i1288.lensShift = new pc.Vec2( i1289[20], i1289[21] )
  i1288.gateFit = i1289[22]
  i1288.commandBufferCount = i1289[23]
  i1288.cameraType = i1289[24]
  i1288.enabled = !!i1289[25]
  return i1288
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1291 = data
  i1290.m_RenderShadows = !!i1291[0]
  i1290.m_RequiresDepthTextureOption = i1291[1]
  i1290.m_RequiresOpaqueTextureOption = i1291[2]
  i1290.m_CameraType = i1291[3]
  var i1293 = i1291[4]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 1, i1292, '')
  }
  i1290.m_Cameras = i1292
  i1290.m_RendererIndex = i1291[5]
  i1290.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1291[6] )
  request.r(i1291[7], i1291[8], 0, i1290, 'm_VolumeTrigger')
  i1290.m_VolumeFrameworkUpdateModeOption = i1291[9]
  i1290.m_RenderPostProcessing = !!i1291[10]
  i1290.m_Antialiasing = i1291[11]
  i1290.m_AntialiasingQuality = i1291[12]
  i1290.m_StopNaN = !!i1291[13]
  i1290.m_Dithering = !!i1291[14]
  i1290.m_ClearDepth = !!i1291[15]
  i1290.m_AllowXRRendering = !!i1291[16]
  i1290.m_AllowHDROutput = !!i1291[17]
  i1290.m_UseScreenCoordOverride = !!i1291[18]
  i1290.m_ScreenSizeOverride = new pc.Vec4( i1291[19], i1291[20], i1291[21], i1291[22] )
  i1290.m_ScreenCoordScaleBias = new pc.Vec4( i1291[23], i1291[24], i1291[25], i1291[26] )
  i1290.m_RequiresDepthTexture = !!i1291[27]
  i1290.m_RequiresColorTexture = !!i1291[28]
  i1290.m_Version = i1291[29]
  i1290.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1291[30], i1290.m_TaaSettings)
  return i1290
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1297 = data
  i1296.m_Quality = i1297[0]
  i1296.m_FrameInfluence = i1297[1]
  i1296.m_JitterScale = i1297[2]
  i1296.m_MipBias = i1297[3]
  i1296.m_VarianceClampScale = i1297[4]
  i1296.m_ContrastAdaptiveSharpening = i1297[5]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.tagId = i1299[1]
  i1298.enabled = !!i1299[2]
  i1298.isStatic = !!i1299[3]
  i1298.layer = i1299[4]
  return i1298
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'm_FirstSelected')
  i1300.m_sendNavigationEvents = !!i1301[2]
  i1300.m_DragThreshold = i1301[3]
  return i1300
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1303 = data
  i1302.m_HorizontalAxis = i1303[0]
  i1302.m_VerticalAxis = i1303[1]
  i1302.m_SubmitButton = i1303[2]
  i1302.m_CancelButton = i1303[3]
  i1302.m_InputActionsPerSecond = i1303[4]
  i1302.m_RepeatDelay = i1303[5]
  i1302.m_ForceModuleActive = !!i1303[6]
  i1302.m_SendPointerHoverToParent = !!i1303[7]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1305 = data
  i1304.pivot = new pc.Vec2( i1305[0], i1305[1] )
  i1304.anchorMin = new pc.Vec2( i1305[2], i1305[3] )
  i1304.anchorMax = new pc.Vec2( i1305[4], i1305[5] )
  i1304.sizeDelta = new pc.Vec2( i1305[6], i1305[7] )
  i1304.anchoredPosition3D = new pc.Vec3( i1305[8], i1305[9], i1305[10] )
  i1304.rotation = new pc.Quat(i1305[11], i1305[12], i1305[13], i1305[14])
  i1304.scale = new pc.Vec3( i1305[15], i1305[16], i1305[17] )
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1307 = data
  i1306.planeDistance = i1307[0]
  i1306.referencePixelsPerUnit = i1307[1]
  i1306.isFallbackOverlay = !!i1307[2]
  i1306.renderMode = i1307[3]
  i1306.renderOrder = i1307[4]
  i1306.sortingLayerName = i1307[5]
  i1306.sortingOrder = i1307[6]
  i1306.scaleFactor = i1307[7]
  request.r(i1307[8], i1307[9], 0, i1306, 'worldCamera')
  i1306.overrideSorting = !!i1307[10]
  i1306.pixelPerfect = !!i1307[11]
  i1306.targetDisplay = i1307[12]
  i1306.overridePixelPerfect = !!i1307[13]
  i1306.enabled = !!i1307[14]
  return i1306
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1309 = data
  i1308.m_UiScaleMode = i1309[0]
  i1308.m_ReferencePixelsPerUnit = i1309[1]
  i1308.m_ScaleFactor = i1309[2]
  i1308.m_ReferenceResolution = new pc.Vec2( i1309[3], i1309[4] )
  i1308.m_ScreenMatchMode = i1309[5]
  i1308.m_MatchWidthOrHeight = i1309[6]
  i1308.m_PhysicalUnit = i1309[7]
  i1308.m_FallbackScreenDPI = i1309[8]
  i1308.m_DefaultSpriteDPI = i1309[9]
  i1308.m_DynamicPixelsPerUnit = i1309[10]
  i1308.m_PresetInfoIsWorld = !!i1309[11]
  return i1308
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1311 = data
  i1310.m_IgnoreReversedGraphics = !!i1311[0]
  i1310.m_BlockingObjects = i1311[1]
  i1310.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1311[2] )
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1313 = data
  i1312.cullTransparentMesh = !!i1313[0]
  return i1312
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.UI.Image' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'm_Sprite')
  i1314.m_Type = i1315[2]
  i1314.m_PreserveAspect = !!i1315[3]
  i1314.m_FillCenter = !!i1315[4]
  i1314.m_FillMethod = i1315[5]
  i1314.m_FillAmount = i1315[6]
  i1314.m_FillClockwise = !!i1315[7]
  i1314.m_FillOrigin = i1315[8]
  i1314.m_UseSpriteMesh = !!i1315[9]
  i1314.m_PixelsPerUnitMultiplier = i1315[10]
  request.r(i1315[11], i1315[12], 0, i1314, 'm_Material')
  i1314.m_Maskable = !!i1315[13]
  i1314.m_Color = new pc.Color(i1315[14], i1315[15], i1315[16], i1315[17])
  i1314.m_RaycastTarget = !!i1315[18]
  i1314.m_RaycastPadding = new pc.Vec4( i1315[19], i1315[20], i1315[21], i1315[22] )
  return i1314
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1317 = data
  i1316.m_hasFontAssetChanged = !!i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'm_baseMaterial')
  i1316.m_maskOffset = new pc.Vec4( i1317[3], i1317[4], i1317[5], i1317[6] )
  i1316.m_text = i1317[7]
  i1316.m_isRightToLeft = !!i1317[8]
  request.r(i1317[9], i1317[10], 0, i1316, 'm_fontAsset')
  request.r(i1317[11], i1317[12], 0, i1316, 'm_sharedMaterial')
  var i1319 = i1317[13]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 2, i1318, '')
  }
  i1316.m_fontSharedMaterials = i1318
  request.r(i1317[14], i1317[15], 0, i1316, 'm_fontMaterial')
  var i1321 = i1317[16]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 2, i1320, '')
  }
  i1316.m_fontMaterials = i1320
  i1316.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1317[17], i1317[18], i1317[19], i1317[20])
  i1316.m_fontColor = new pc.Color(i1317[21], i1317[22], i1317[23], i1317[24])
  i1316.m_enableVertexGradient = !!i1317[25]
  i1316.m_colorMode = i1317[26]
  i1316.m_fontColorGradient = request.d('TMPro.VertexGradient', i1317[27], i1316.m_fontColorGradient)
  request.r(i1317[28], i1317[29], 0, i1316, 'm_fontColorGradientPreset')
  request.r(i1317[30], i1317[31], 0, i1316, 'm_spriteAsset')
  i1316.m_tintAllSprites = !!i1317[32]
  request.r(i1317[33], i1317[34], 0, i1316, 'm_StyleSheet')
  i1316.m_TextStyleHashCode = i1317[35]
  i1316.m_overrideHtmlColors = !!i1317[36]
  i1316.m_faceColor = UnityEngine.Color32.ConstructColor(i1317[37], i1317[38], i1317[39], i1317[40])
  i1316.m_fontSize = i1317[41]
  i1316.m_fontSizeBase = i1317[42]
  i1316.m_fontWeight = i1317[43]
  i1316.m_enableAutoSizing = !!i1317[44]
  i1316.m_fontSizeMin = i1317[45]
  i1316.m_fontSizeMax = i1317[46]
  i1316.m_fontStyle = i1317[47]
  i1316.m_HorizontalAlignment = i1317[48]
  i1316.m_VerticalAlignment = i1317[49]
  i1316.m_textAlignment = i1317[50]
  i1316.m_characterSpacing = i1317[51]
  i1316.m_characterHorizontalScale = i1317[52]
  i1316.m_wordSpacing = i1317[53]
  i1316.m_lineSpacing = i1317[54]
  i1316.m_lineSpacingMax = i1317[55]
  i1316.m_paragraphSpacing = i1317[56]
  i1316.m_charWidthMaxAdj = i1317[57]
  i1316.m_TextWrappingMode = i1317[58]
  i1316.m_wordWrappingRatios = i1317[59]
  i1316.m_overflowMode = i1317[60]
  request.r(i1317[61], i1317[62], 0, i1316, 'm_linkedTextComponent')
  request.r(i1317[63], i1317[64], 0, i1316, 'parentLinkedComponent')
  i1316.m_enableKerning = !!i1317[65]
  var i1323 = i1317[66]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(i1323[i + 0]);
  }
  i1316.m_ActiveFontFeatures = i1322
  i1316.m_enableExtraPadding = !!i1317[67]
  i1316.checkPaddingRequired = !!i1317[68]
  i1316.m_isRichText = !!i1317[69]
  i1316.m_parseCtrlCharacters = !!i1317[70]
  i1316.m_isOrthographic = !!i1317[71]
  i1316.m_isCullingEnabled = !!i1317[72]
  i1316.m_horizontalMapping = i1317[73]
  i1316.m_verticalMapping = i1317[74]
  i1316.m_uvLineOffset = i1317[75]
  i1316.m_geometrySortingOrder = i1317[76]
  i1316.m_IsTextObjectScaleStatic = !!i1317[77]
  i1316.m_VertexBufferAutoSizeReduction = !!i1317[78]
  i1316.m_useMaxVisibleDescender = !!i1317[79]
  i1316.m_pageToDisplay = i1317[80]
  i1316.m_margin = new pc.Vec4( i1317[81], i1317[82], i1317[83], i1317[84] )
  i1316.m_isUsingLegacyAnimationComponent = !!i1317[85]
  i1316.m_isVolumetricText = !!i1317[86]
  request.r(i1317[87], i1317[88], 0, i1316, 'm_Material')
  i1316.m_EmojiFallbackSupport = !!i1317[89]
  i1316.m_Maskable = !!i1317[90]
  i1316.m_Color = new pc.Color(i1317[91], i1317[92], i1317[93], i1317[94])
  i1316.m_RaycastTarget = !!i1317[95]
  i1316.m_RaycastPadding = new pc.Vec4( i1317[96], i1317[97], i1317[98], i1317[99] )
  return i1316
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.VertexGradient' )
  var i1327 = data
  i1326.topLeft = new pc.Color(i1327[0], i1327[1], i1327[2], i1327[3])
  i1326.topRight = new pc.Color(i1327[4], i1327[5], i1327[6], i1327[7])
  i1326.bottomLeft = new pc.Color(i1327[8], i1327[9], i1327[10], i1327[11])
  i1326.bottomRight = new pc.Color(i1327[12], i1327[13], i1327[14], i1327[15])
  return i1326
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'm_FillRect')
  request.r(i1331[2], i1331[3], 0, i1330, 'm_HandleRect')
  i1330.m_Direction = i1331[4]
  i1330.m_MinValue = i1331[5]
  i1330.m_MaxValue = i1331[6]
  i1330.m_WholeNumbers = !!i1331[7]
  i1330.m_Value = i1331[8]
  i1330.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1331[9], i1330.m_OnValueChanged)
  i1330.m_Navigation = request.d('UnityEngine.UI.Navigation', i1331[10], i1330.m_Navigation)
  i1330.m_Transition = i1331[11]
  i1330.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1331[12], i1330.m_Colors)
  i1330.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1331[13], i1330.m_SpriteState)
  i1330.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1331[14], i1330.m_AnimationTriggers)
  i1330.m_Interactable = !!i1331[15]
  request.r(i1331[16], i1331[17], 0, i1330, 'm_TargetGraphic')
  return i1330
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1333 = data
  i1332.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1333[0], i1332.m_PersistentCalls)
  return i1332
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('UnityEngine.Events.PersistentCall', i1337[i + 0]));
  }
  i1334.m_Calls = i1336
  return i1334
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'm_Target')
  i1340.m_TargetAssemblyTypeName = i1341[2]
  i1340.m_MethodName = i1341[3]
  i1340.m_Mode = i1341[4]
  i1340.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1341[5], i1340.m_Arguments)
  i1340.m_CallState = i1341[6]
  return i1340
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1343 = data
  i1342.m_Mode = i1343[0]
  i1342.m_WrapAround = !!i1343[1]
  request.r(i1343[2], i1343[3], 0, i1342, 'm_SelectOnUp')
  request.r(i1343[4], i1343[5], 0, i1342, 'm_SelectOnDown')
  request.r(i1343[6], i1343[7], 0, i1342, 'm_SelectOnLeft')
  request.r(i1343[8], i1343[9], 0, i1342, 'm_SelectOnRight')
  return i1342
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1345 = data
  i1344.m_NormalColor = new pc.Color(i1345[0], i1345[1], i1345[2], i1345[3])
  i1344.m_HighlightedColor = new pc.Color(i1345[4], i1345[5], i1345[6], i1345[7])
  i1344.m_PressedColor = new pc.Color(i1345[8], i1345[9], i1345[10], i1345[11])
  i1344.m_SelectedColor = new pc.Color(i1345[12], i1345[13], i1345[14], i1345[15])
  i1344.m_DisabledColor = new pc.Color(i1345[16], i1345[17], i1345[18], i1345[19])
  i1344.m_ColorMultiplier = i1345[20]
  i1344.m_FadeDuration = i1345[21]
  return i1344
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'm_HighlightedSprite')
  request.r(i1347[2], i1347[3], 0, i1346, 'm_PressedSprite')
  request.r(i1347[4], i1347[5], 0, i1346, 'm_SelectedSprite')
  request.r(i1347[6], i1347[7], 0, i1346, 'm_DisabledSprite')
  return i1346
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1349 = data
  i1348.m_NormalTrigger = i1349[0]
  i1348.m_HighlightedTrigger = i1349[1]
  i1348.m_PressedTrigger = i1349[2]
  i1348.m_SelectedTrigger = i1349[3]
  i1348.m_DisabledTrigger = i1349[4]
  return i1348
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.UI.Button' )
  var i1351 = data
  i1350.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1351[0], i1350.m_OnClick)
  i1350.m_Navigation = request.d('UnityEngine.UI.Navigation', i1351[1], i1350.m_Navigation)
  i1350.m_Transition = i1351[2]
  i1350.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1351[3], i1350.m_Colors)
  i1350.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1351[4], i1350.m_SpriteState)
  i1350.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1351[5], i1350.m_AnimationTriggers)
  i1350.m_Interactable = !!i1351[6]
  request.r(i1351[7], i1351[8], 0, i1350, 'm_TargetGraphic')
  return i1350
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1353 = data
  i1352.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1353[0], i1352.m_PersistentCalls)
  return i1352
}

Deserializers["ClickerGame"] = function (request, data, root) {
  var i1354 = root || request.c( 'ClickerGame' )
  var i1355 = data
  i1354.targetClicks = i1355[0]
  i1354.currentScore = i1355[1]
  i1354.pointsPerClick = i1355[2]
  request.r(i1355[3], i1355[4], 0, i1354, 'scoreText')
  request.r(i1355[5], i1355[6], 0, i1354, 'targetText')
  request.r(i1355[7], i1355[8], 0, i1354, 'progressSlider')
  request.r(i1355[9], i1355[10], 0, i1354, 'clickButton')
  request.r(i1355[11], i1355[12], 0, i1354, 'buttonTransform')
  request.r(i1355[13], i1355[14], 0, i1354, 'restartButton')
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1357 = data
  i1356.ambientIntensity = i1357[0]
  i1356.reflectionIntensity = i1357[1]
  i1356.ambientMode = i1357[2]
  i1356.ambientLight = new pc.Color(i1357[3], i1357[4], i1357[5], i1357[6])
  i1356.ambientSkyColor = new pc.Color(i1357[7], i1357[8], i1357[9], i1357[10])
  i1356.ambientGroundColor = new pc.Color(i1357[11], i1357[12], i1357[13], i1357[14])
  i1356.ambientEquatorColor = new pc.Color(i1357[15], i1357[16], i1357[17], i1357[18])
  i1356.fogColor = new pc.Color(i1357[19], i1357[20], i1357[21], i1357[22])
  i1356.fogEndDistance = i1357[23]
  i1356.fogStartDistance = i1357[24]
  i1356.fogDensity = i1357[25]
  i1356.fog = !!i1357[26]
  request.r(i1357[27], i1357[28], 0, i1356, 'skybox')
  i1356.fogMode = i1357[29]
  var i1359 = i1357[30]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1359[i + 0]) );
  }
  i1356.lightmaps = i1358
  i1356.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1357[31], i1356.lightProbes)
  i1356.lightmapsMode = i1357[32]
  i1356.mixedBakeMode = i1357[33]
  i1356.environmentLightingMode = i1357[34]
  i1356.ambientProbe = new pc.SphericalHarmonicsL2(i1357[35])
  request.r(i1357[36], i1357[37], 0, i1356, 'customReflection')
  request.r(i1357[38], i1357[39], 0, i1356, 'defaultReflection')
  i1356.defaultReflectionMode = i1357[40]
  i1356.defaultReflectionResolution = i1357[41]
  i1356.sunLightObjectId = i1357[42]
  i1356.pixelLightCount = i1357[43]
  i1356.defaultReflectionHDR = !!i1357[44]
  i1356.hasLightDataAsset = !!i1357[45]
  i1356.hasManualGenerate = !!i1357[46]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'lightmapColor')
  request.r(i1363[2], i1363[3], 0, i1362, 'lightmapDirection')
  request.r(i1363[4], i1363[5], 0, i1362, 'shadowMask')
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1364 = root || new UnityEngine.LightProbes()
  var i1365 = data
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1373 = data
  var i1375 = i1373[0]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1375[i + 0]));
  }
  i1372.ShaderCompilationErrors = i1374
  i1372.name = i1373[1]
  i1372.guid = i1373[2]
  var i1377 = i1373[3]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( i1377[i + 0] );
  }
  i1372.shaderDefinedKeywords = i1376
  var i1379 = i1373[4]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1379[i + 0]) );
  }
  i1372.passes = i1378
  var i1381 = i1373[5]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1381[i + 0]) );
  }
  i1372.usePasses = i1380
  var i1383 = i1373[6]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1383[i + 0]) );
  }
  i1372.defaultParameterValues = i1382
  request.r(i1373[7], i1373[8], 0, i1372, 'unityFallbackShader')
  i1372.readDepth = !!i1373[9]
  i1372.hasDepthOnlyPass = !!i1373[10]
  i1372.isCreatedByShaderGraph = !!i1373[11]
  i1372.disableBatching = !!i1373[12]
  i1372.compiled = !!i1373[13]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1387 = data
  i1386.shaderName = i1387[0]
  i1386.errorMessage = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1392 = root || new pc.UnityShaderPass()
  var i1393 = data
  i1392.id = i1393[0]
  i1392.subShaderIndex = i1393[1]
  i1392.name = i1393[2]
  i1392.passType = i1393[3]
  i1392.grabPassTextureName = i1393[4]
  i1392.usePass = !!i1393[5]
  i1392.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[6], i1392.zTest)
  i1392.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[7], i1392.zWrite)
  i1392.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[8], i1392.culling)
  i1392.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1393[9], i1392.blending)
  i1392.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1393[10], i1392.alphaBlending)
  i1392.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[11], i1392.colorWriteMask)
  i1392.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[12], i1392.offsetUnits)
  i1392.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[13], i1392.offsetFactor)
  i1392.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[14], i1392.stencilRef)
  i1392.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[15], i1392.stencilReadMask)
  i1392.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[16], i1392.stencilWriteMask)
  i1392.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1393[17], i1392.stencilOp)
  i1392.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1393[18], i1392.stencilOpFront)
  i1392.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1393[19], i1392.stencilOpBack)
  var i1395 = i1393[20]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1395[i + 0]) );
  }
  i1392.tags = i1394
  var i1397 = i1393[21]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( i1397[i + 0] );
  }
  i1392.passDefinedKeywords = i1396
  var i1399 = i1393[22]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1399[i + 0]) );
  }
  i1392.passDefinedKeywordGroups = i1398
  var i1401 = i1393[23]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1401[i + 0]) );
  }
  i1392.variants = i1400
  var i1403 = i1393[24]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1403[i + 0]) );
  }
  i1392.excludedVariants = i1402
  i1392.hasDepthReader = !!i1393[25]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1405 = data
  i1404.val = i1405[0]
  i1404.name = i1405[1]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1407 = data
  i1406.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1407[0], i1406.src)
  i1406.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1407[1], i1406.dst)
  i1406.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1407[2], i1406.op)
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1409 = data
  i1408.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1409[0], i1408.pass)
  i1408.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1409[1], i1408.fail)
  i1408.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1409[2], i1408.zFail)
  i1408.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1409[3], i1408.comp)
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1413 = data
  i1412.name = i1413[0]
  i1412.value = i1413[1]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( i1419[i + 0] );
  }
  i1416.keywords = i1418
  i1416.hasDiscard = !!i1417[1]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1423 = data
  i1422.passId = i1423[0]
  i1422.subShaderIndex = i1423[1]
  var i1425 = i1423[2]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( i1425[i + 0] );
  }
  i1422.keywords = i1424
  i1422.vertexProgram = i1423[3]
  i1422.fragmentProgram = i1423[4]
  i1422.exportedForWebGl2 = !!i1423[5]
  i1422.readDepth = !!i1423[6]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'shader')
  i1428.pass = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.type = i1433[1]
  i1432.value = new pc.Vec4( i1433[2], i1433[3], i1433[4], i1433[5] )
  i1432.textureValue = i1433[6]
  i1432.shaderPropertyFlag = i1433[7]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1435 = data
  i1434.name = i1435[0]
  i1434.bytes64 = i1435[1]
  i1434.data = i1435[2]
  return i1434
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1437 = data
  i1436.normalStyle = i1437[0]
  i1436.normalSpacingOffset = i1437[1]
  i1436.boldStyle = i1437[2]
  i1436.boldSpacing = i1437[3]
  i1436.italicStyle = i1437[4]
  i1436.tabSize = i1437[5]
  request.r(i1437[6], i1437[7], 0, i1436, 'atlas')
  i1436.m_SourceFontFileGUID = i1437[8]
  i1436.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1437[9], i1436.m_CreationSettings)
  request.r(i1437[10], i1437[11], 0, i1436, 'm_SourceFontFile')
  i1436.m_SourceFontFilePath = i1437[12]
  i1436.m_AtlasPopulationMode = i1437[13]
  i1436.InternalDynamicOS = !!i1437[14]
  var i1439 = i1437[15]
  var i1438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.add(request.d('UnityEngine.TextCore.Glyph', i1439[i + 0]));
  }
  i1436.m_GlyphTable = i1438
  var i1441 = i1437[16]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.add(request.d('TMPro.TMP_Character', i1441[i + 0]));
  }
  i1436.m_CharacterTable = i1440
  var i1443 = i1437[17]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 2) {
  request.r(i1443[i + 0], i1443[i + 1], 2, i1442, '')
  }
  i1436.m_AtlasTextures = i1442
  i1436.m_AtlasTextureIndex = i1437[18]
  i1436.m_IsMultiAtlasTexturesEnabled = !!i1437[19]
  i1436.m_GetFontFeatures = !!i1437[20]
  i1436.m_ClearDynamicDataOnBuild = !!i1437[21]
  i1436.m_AtlasWidth = i1437[22]
  i1436.m_AtlasHeight = i1437[23]
  i1436.m_AtlasPadding = i1437[24]
  i1436.m_AtlasRenderMode = i1437[25]
  var i1445 = i1437[26]
  var i1444 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.add(request.d('UnityEngine.TextCore.GlyphRect', i1445[i + 0]));
  }
  i1436.m_UsedGlyphRects = i1444
  var i1447 = i1437[27]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.add(request.d('UnityEngine.TextCore.GlyphRect', i1447[i + 0]));
  }
  i1436.m_FreeGlyphRects = i1446
  i1436.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1437[28], i1436.m_FontFeatureTable)
  i1436.m_ShouldReimportFontFeatures = !!i1437[29]
  var i1449 = i1437[30]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1449.length; i += 2) {
  request.r(i1449[i + 0], i1449[i + 1], 1, i1448, '')
  }
  i1436.m_FallbackFontAssetTable = i1448
  var i1451 = i1437[31]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('TMPro.TMP_FontWeightPair', i1451[i + 0]) );
  }
  i1436.m_FontWeightTable = i1450
  var i1453 = i1437[32]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('TMPro.TMP_FontWeightPair', i1453[i + 0]) );
  }
  i1436.fontWeights = i1452
  i1436.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1437[33], i1436.m_fontInfo)
  var i1455 = i1437[34]
  var i1454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.add(request.d('TMPro.TMP_Glyph', i1455[i + 0]));
  }
  i1436.m_glyphInfoList = i1454
  i1436.m_KerningTable = request.d('TMPro.KerningTable', i1437[35], i1436.m_KerningTable)
  var i1457 = i1437[36]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1457.length; i += 2) {
  request.r(i1457[i + 0], i1457[i + 1], 1, i1456, '')
  }
  i1436.fallbackFontAssets = i1456
  i1436.m_Version = i1437[37]
  i1436.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1437[38], i1436.m_FaceInfo)
  request.r(i1437[39], i1437[40], 0, i1436, 'm_Material')
  return i1436
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1459 = data
  i1458.sourceFontFileName = i1459[0]
  i1458.sourceFontFileGUID = i1459[1]
  i1458.faceIndex = i1459[2]
  i1458.pointSizeSamplingMode = i1459[3]
  i1458.pointSize = i1459[4]
  i1458.padding = i1459[5]
  i1458.paddingMode = i1459[6]
  i1458.packingMode = i1459[7]
  i1458.atlasWidth = i1459[8]
  i1458.atlasHeight = i1459[9]
  i1458.characterSetSelectionMode = i1459[10]
  i1458.characterSequence = i1459[11]
  i1458.referencedFontAssetGUID = i1459[12]
  i1458.referencedTextAssetGUID = i1459[13]
  i1458.fontStyle = i1459[14]
  i1458.fontStyleModifier = i1459[15]
  i1458.renderMode = i1459[16]
  i1458.includeFontFeatures = !!i1459[17]
  return i1458
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1463 = data
  i1462.m_Index = i1463[0]
  i1462.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1463[1], i1462.m_Metrics)
  i1462.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1463[2], i1462.m_GlyphRect)
  i1462.m_Scale = i1463[3]
  i1462.m_AtlasIndex = i1463[4]
  i1462.m_ClassDefinitionType = i1463[5]
  return i1462
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1465 = data
  i1464.m_Width = i1465[0]
  i1464.m_Height = i1465[1]
  i1464.m_HorizontalBearingX = i1465[2]
  i1464.m_HorizontalBearingY = i1465[3]
  i1464.m_HorizontalAdvance = i1465[4]
  return i1464
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1467 = data
  i1466.m_X = i1467[0]
  i1466.m_Y = i1467[1]
  i1466.m_Width = i1467[2]
  i1466.m_Height = i1467[3]
  return i1466
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1470 = root || request.c( 'TMPro.TMP_Character' )
  var i1471 = data
  i1470.m_ElementType = i1471[0]
  i1470.m_Unicode = i1471[1]
  i1470.m_GlyphIndex = i1471[2]
  i1470.m_Scale = i1471[3]
  return i1470
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1476 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1477 = data
  var i1479 = i1477[0]
  var i1478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.add(request.d('TMPro.MultipleSubstitutionRecord', i1479[i + 0]));
  }
  i1476.m_MultipleSubstitutionRecords = i1478
  var i1481 = i1477[1]
  var i1480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.add(request.d('TMPro.LigatureSubstitutionRecord', i1481[i + 0]));
  }
  i1476.m_LigatureSubstitutionRecords = i1480
  var i1483 = i1477[2]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1483[i + 0]));
  }
  i1476.m_GlyphPairAdjustmentRecords = i1482
  var i1485 = i1477[3]
  var i1484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1485[i + 0]));
  }
  i1476.m_MarkToBaseAdjustmentRecords = i1484
  var i1487 = i1477[4]
  var i1486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1487[i + 0]));
  }
  i1476.m_MarkToMarkAdjustmentRecords = i1486
  return i1476
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1491 = data
  i1490.m_TargetGlyphID = i1491[0]
  i1490.m_SubstituteGlyphIDs = i1491[1]
  return i1490
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1494 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1495 = data
  i1494.m_ComponentGlyphIDs = i1495[0]
  i1494.m_LigatureGlyphID = i1495[1]
  return i1494
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1499 = data
  i1498.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1499[0], i1498.m_FirstAdjustmentRecord)
  i1498.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1499[1], i1498.m_SecondAdjustmentRecord)
  i1498.m_FeatureLookupFlags = i1499[2]
  return i1498
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1501 = data
  i1500.m_GlyphIndex = i1501[0]
  i1500.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1501[1], i1500.m_GlyphValueRecord)
  return i1500
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1503 = data
  i1502.m_XPlacement = i1503[0]
  i1502.m_YPlacement = i1503[1]
  i1502.m_XAdvance = i1503[2]
  i1502.m_YAdvance = i1503[3]
  return i1502
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1506 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1507 = data
  i1506.m_BaseGlyphID = i1507[0]
  i1506.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1507[1], i1506.m_BaseGlyphAnchorPoint)
  i1506.m_MarkGlyphID = i1507[2]
  i1506.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1507[3], i1506.m_MarkPositionAdjustment)
  return i1506
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1510 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1511 = data
  i1510.m_BaseMarkGlyphID = i1511[0]
  i1510.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1511[1], i1510.m_BaseMarkGlyphAnchorPoint)
  i1510.m_CombiningMarkGlyphID = i1511[2]
  i1510.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1511[3], i1510.m_CombiningMarkPositionAdjustment)
  return i1510
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'regularTypeface')
  request.r(i1517[2], i1517[3], 0, i1516, 'italicTypeface')
  return i1516
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1518 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1519 = data
  i1518.Name = i1519[0]
  i1518.PointSize = i1519[1]
  i1518.Scale = i1519[2]
  i1518.CharacterCount = i1519[3]
  i1518.LineHeight = i1519[4]
  i1518.Baseline = i1519[5]
  i1518.Ascender = i1519[6]
  i1518.CapHeight = i1519[7]
  i1518.Descender = i1519[8]
  i1518.CenterLine = i1519[9]
  i1518.SuperscriptOffset = i1519[10]
  i1518.SubscriptOffset = i1519[11]
  i1518.SubSize = i1519[12]
  i1518.Underline = i1519[13]
  i1518.UnderlineThickness = i1519[14]
  i1518.strikethrough = i1519[15]
  i1518.strikethroughThickness = i1519[16]
  i1518.TabWidth = i1519[17]
  i1518.Padding = i1519[18]
  i1518.AtlasWidth = i1519[19]
  i1518.AtlasHeight = i1519[20]
  return i1518
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1522 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1523 = data
  i1522.id = i1523[0]
  i1522.x = i1523[1]
  i1522.y = i1523[2]
  i1522.width = i1523[3]
  i1522.height = i1523[4]
  i1522.xOffset = i1523[5]
  i1522.yOffset = i1523[6]
  i1522.xAdvance = i1523[7]
  i1522.scale = i1523[8]
  return i1522
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1524 = root || request.c( 'TMPro.KerningTable' )
  var i1525 = data
  var i1527 = i1525[0]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.add(request.d('TMPro.KerningPair', i1527[i + 0]));
  }
  i1524.kerningPairs = i1526
  return i1524
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.KerningPair' )
  var i1531 = data
  i1530.xOffset = i1531[0]
  i1530.m_FirstGlyph = i1531[1]
  i1530.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1531[2], i1530.m_FirstGlyphAdjustments)
  i1530.m_SecondGlyph = i1531[3]
  i1530.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1531[4], i1530.m_SecondGlyphAdjustments)
  i1530.m_IgnoreSpacingAdjustments = !!i1531[5]
  return i1530
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1533 = data
  i1532.m_FaceIndex = i1533[0]
  i1532.m_FamilyName = i1533[1]
  i1532.m_StyleName = i1533[2]
  i1532.m_PointSize = i1533[3]
  i1532.m_Scale = i1533[4]
  i1532.m_UnitsPerEM = i1533[5]
  i1532.m_LineHeight = i1533[6]
  i1532.m_AscentLine = i1533[7]
  i1532.m_CapLine = i1533[8]
  i1532.m_MeanLine = i1533[9]
  i1532.m_Baseline = i1533[10]
  i1532.m_DescentLine = i1533[11]
  i1532.m_SuperscriptOffset = i1533[12]
  i1532.m_SuperscriptSize = i1533[13]
  i1532.m_SubscriptOffset = i1533[14]
  i1532.m_SubscriptSize = i1533[15]
  i1532.m_UnderlineOffset = i1533[16]
  i1532.m_UnderlineThickness = i1533[17]
  i1532.m_StrikethroughOffset = i1533[18]
  i1532.m_StrikethroughThickness = i1533[19]
  i1532.m_TabWidth = i1533[20]
  return i1532
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1534 = root || request.c( 'TMPro.TMP_Settings' )
  var i1535 = data
  i1534.assetVersion = i1535[0]
  i1534.m_TextWrappingMode = i1535[1]
  i1534.m_enableKerning = !!i1535[2]
  var i1537 = i1535[3]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(i1537[i + 0]);
  }
  i1534.m_ActiveFontFeatures = i1536
  i1534.m_enableExtraPadding = !!i1535[4]
  i1534.m_enableTintAllSprites = !!i1535[5]
  i1534.m_enableParseEscapeCharacters = !!i1535[6]
  i1534.m_EnableRaycastTarget = !!i1535[7]
  i1534.m_GetFontFeaturesAtRuntime = !!i1535[8]
  i1534.m_missingGlyphCharacter = i1535[9]
  i1534.m_ClearDynamicDataOnBuild = !!i1535[10]
  i1534.m_warningsDisabled = !!i1535[11]
  request.r(i1535[12], i1535[13], 0, i1534, 'm_defaultFontAsset')
  i1534.m_defaultFontAssetPath = i1535[14]
  i1534.m_defaultFontSize = i1535[15]
  i1534.m_defaultAutoSizeMinRatio = i1535[16]
  i1534.m_defaultAutoSizeMaxRatio = i1535[17]
  i1534.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1535[18], i1535[19] )
  i1534.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1535[20], i1535[21] )
  i1534.m_autoSizeTextContainer = !!i1535[22]
  i1534.m_IsTextObjectScaleStatic = !!i1535[23]
  var i1539 = i1535[24]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1539.length; i += 2) {
  request.r(i1539[i + 0], i1539[i + 1], 1, i1538, '')
  }
  i1534.m_fallbackFontAssets = i1538
  i1534.m_matchMaterialPreset = !!i1535[25]
  i1534.m_HideSubTextObjects = !!i1535[26]
  request.r(i1535[27], i1535[28], 0, i1534, 'm_defaultSpriteAsset')
  i1534.m_defaultSpriteAssetPath = i1535[29]
  i1534.m_enableEmojiSupport = !!i1535[30]
  i1534.m_MissingCharacterSpriteUnicode = i1535[31]
  var i1541 = i1535[32]
  var i1540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 1, i1540, '')
  }
  i1534.m_EmojiFallbackTextAssets = i1540
  i1534.m_defaultColorGradientPresetsPath = i1535[33]
  request.r(i1535[34], i1535[35], 0, i1534, 'm_defaultStyleSheet')
  i1534.m_StyleSheetsResourcePath = i1535[36]
  request.r(i1535[37], i1535[38], 0, i1534, 'm_leadingCharacters')
  request.r(i1535[39], i1535[40], 0, i1534, 'm_followingCharacters')
  i1534.m_UseModernHangulLineBreakingRules = !!i1535[41]
  return i1534
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1544 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'spriteSheet')
  var i1547 = i1545[2]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.add(request.d('TMPro.TMP_Sprite', i1547[i + 0]));
  }
  i1544.spriteInfoList = i1546
  var i1549 = i1545[3]
  var i1548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 1, i1548, '')
  }
  i1544.fallbackSpriteAssets = i1548
  var i1551 = i1545[4]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.add(request.d('TMPro.TMP_SpriteCharacter', i1551[i + 0]));
  }
  i1544.m_SpriteCharacterTable = i1550
  var i1553 = i1545[5]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.add(request.d('TMPro.TMP_SpriteGlyph', i1553[i + 0]));
  }
  i1544.m_GlyphTable = i1552
  i1544.m_Version = i1545[6]
  i1544.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1545[7], i1544.m_FaceInfo)
  request.r(i1545[8], i1545[9], 0, i1544, 'm_Material')
  return i1544
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1557 = data
  i1556.name = i1557[0]
  i1556.hashCode = i1557[1]
  i1556.unicode = i1557[2]
  i1556.pivot = new pc.Vec2( i1557[3], i1557[4] )
  request.r(i1557[5], i1557[6], 0, i1556, 'sprite')
  i1556.id = i1557[7]
  i1556.x = i1557[8]
  i1556.y = i1557[9]
  i1556.width = i1557[10]
  i1556.height = i1557[11]
  i1556.xOffset = i1557[12]
  i1556.yOffset = i1557[13]
  i1556.xAdvance = i1557[14]
  i1556.scale = i1557[15]
  return i1556
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1562 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1563 = data
  i1562.m_Name = i1563[0]
  i1562.m_ElementType = i1563[1]
  i1562.m_Unicode = i1563[2]
  i1562.m_GlyphIndex = i1563[3]
  i1562.m_Scale = i1563[4]
  return i1562
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1566 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'sprite')
  i1566.m_Index = i1567[2]
  i1566.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1567[3], i1566.m_Metrics)
  i1566.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1567[4], i1566.m_GlyphRect)
  i1566.m_Scale = i1567[5]
  i1566.m_AtlasIndex = i1567[6]
  i1566.m_ClassDefinitionType = i1567[7]
  return i1566
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1568 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1569 = data
  var i1571 = i1569[0]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.add(request.d('TMPro.TMP_Style', i1571[i + 0]));
  }
  i1568.m_StyleList = i1570
  return i1568
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.TMP_Style' )
  var i1575 = data
  i1574.m_Name = i1575[0]
  i1574.m_HashCode = i1575[1]
  i1574.m_OpeningDefinition = i1575[2]
  i1574.m_ClosingDefinition = i1575[3]
  i1574.m_OpeningTagArray = i1575[4]
  i1574.m_ClosingTagArray = i1575[5]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1577 = data
  var i1579 = i1577[0]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1579[i + 0]) );
  }
  i1576.files = i1578
  i1576.componentToPrefabIds = i1577[1]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1583 = data
  i1582.path = i1583[0]
  request.r(i1583[1], i1583[2], 0, i1582, 'unityObject')
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1585 = data
  var i1587 = i1585[0]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1587[i + 0]) );
  }
  i1584.scriptsExecutionOrder = i1586
  var i1589 = i1585[1]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1589[i + 0]) );
  }
  i1584.sortingLayers = i1588
  var i1591 = i1585[2]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1591[i + 0]) );
  }
  i1584.cullingLayers = i1590
  i1584.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1585[3], i1584.timeSettings)
  i1584.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1585[4], i1584.physicsSettings)
  i1584.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1585[5], i1584.physics2DSettings)
  i1584.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1585[6], i1584.qualitySettings)
  i1584.enableRealtimeShadows = !!i1585[7]
  i1584.enableAutoInstancing = !!i1585[8]
  i1584.enableStaticBatching = !!i1585[9]
  i1584.enableDynamicBatching = !!i1585[10]
  i1584.usePreservativeDynamicBatching = !!i1585[11]
  i1584.lightmapEncodingQuality = i1585[12]
  i1584.desiredColorSpace = i1585[13]
  var i1593 = i1585[14]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( i1593[i + 0] );
  }
  i1584.allTags = i1592
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.value = i1597[1]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1601 = data
  i1600.id = i1601[0]
  i1600.name = i1601[1]
  i1600.value = i1601[2]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1605 = data
  i1604.id = i1605[0]
  i1604.name = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1607 = data
  i1606.fixedDeltaTime = i1607[0]
  i1606.maximumDeltaTime = i1607[1]
  i1606.timeScale = i1607[2]
  i1606.maximumParticleTimestep = i1607[3]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1609 = data
  i1608.gravity = new pc.Vec3( i1609[0], i1609[1], i1609[2] )
  i1608.defaultSolverIterations = i1609[3]
  i1608.bounceThreshold = i1609[4]
  i1608.autoSyncTransforms = !!i1609[5]
  i1608.autoSimulation = !!i1609[6]
  var i1611 = i1609[7]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1611[i + 0]) );
  }
  i1608.collisionMatrix = i1610
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1615 = data
  i1614.enabled = !!i1615[0]
  i1614.layerId = i1615[1]
  i1614.otherLayerId = i1615[2]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'material')
  i1616.gravity = new pc.Vec2( i1617[2], i1617[3] )
  i1616.positionIterations = i1617[4]
  i1616.velocityIterations = i1617[5]
  i1616.velocityThreshold = i1617[6]
  i1616.maxLinearCorrection = i1617[7]
  i1616.maxAngularCorrection = i1617[8]
  i1616.maxTranslationSpeed = i1617[9]
  i1616.maxRotationSpeed = i1617[10]
  i1616.baumgarteScale = i1617[11]
  i1616.baumgarteTOIScale = i1617[12]
  i1616.timeToSleep = i1617[13]
  i1616.linearSleepTolerance = i1617[14]
  i1616.angularSleepTolerance = i1617[15]
  i1616.defaultContactOffset = i1617[16]
  i1616.autoSimulation = !!i1617[17]
  i1616.queriesHitTriggers = !!i1617[18]
  i1616.queriesStartInColliders = !!i1617[19]
  i1616.callbacksOnDisable = !!i1617[20]
  i1616.reuseCollisionCallbacks = !!i1617[21]
  i1616.autoSyncTransforms = !!i1617[22]
  var i1619 = i1617[23]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1619[i + 0]) );
  }
  i1616.collisionMatrix = i1618
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1623 = data
  i1622.enabled = !!i1623[0]
  i1622.layerId = i1623[1]
  i1622.otherLayerId = i1623[2]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1625 = data
  var i1627 = i1625[0]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1627[i + 0]) );
  }
  i1624.qualityLevels = i1626
  var i1629 = i1625[1]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1624.names = i1628
  i1624.shadows = i1625[2]
  i1624.anisotropicFiltering = i1625[3]
  i1624.antiAliasing = i1625[4]
  i1624.lodBias = i1625[5]
  i1624.shadowCascades = i1625[6]
  i1624.shadowDistance = i1625[7]
  i1624.shadowmaskMode = i1625[8]
  i1624.shadowProjection = i1625[9]
  i1624.shadowResolution = i1625[10]
  i1624.softParticles = !!i1625[11]
  i1624.softVegetation = !!i1625[12]
  i1624.activeColorSpace = i1625[13]
  i1624.desiredColorSpace = i1625[14]
  i1624.masterTextureLimit = i1625[15]
  i1624.maxQueuedFrames = i1625[16]
  i1624.particleRaycastBudget = i1625[17]
  i1624.pixelLightCount = i1625[18]
  i1624.realtimeReflectionProbes = !!i1625[19]
  i1624.shadowCascade2Split = i1625[20]
  i1624.shadowCascade4Split = new pc.Vec3( i1625[21], i1625[22], i1625[23] )
  i1624.streamingMipmapsActive = !!i1625[24]
  i1624.vSyncCount = i1625[25]
  i1624.asyncUploadBufferSize = i1625[26]
  i1624.asyncUploadTimeSlice = i1625[27]
  i1624.billboardsFaceCameraPosition = !!i1625[28]
  i1624.shadowNearPlaneOffset = i1625[29]
  i1624.streamingMipmapsMemoryBudget = i1625[30]
  i1624.maximumLODLevel = i1625[31]
  i1624.streamingMipmapsAddAllCameras = !!i1625[32]
  i1624.streamingMipmapsMaxLevelReduction = i1625[33]
  i1624.streamingMipmapsRenderersPerFrame = i1625[34]
  i1624.resolutionScalingFixedDPIFactor = i1625[35]
  i1624.streamingMipmapsMaxFileIORequests = i1625[36]
  i1624.currentQualityLevel = i1625[37]
  return i1624
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'm_ObjectArgument')
  i1632.m_ObjectArgumentAssemblyTypeName = i1633[2]
  i1632.m_IntArgument = i1633[3]
  i1632.m_FloatArgument = i1633[4]
  i1632.m_StringArgument = i1633[5]
  i1632.m_BoolArgument = !!i1633[6]
  return i1632
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1635 = data
  i1634.m_XCoordinate = i1635[0]
  i1634.m_YCoordinate = i1635[1]
  return i1634
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1636 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1637 = data
  i1636.m_XPositionAdjustment = i1637[0]
  i1636.m_YPositionAdjustment = i1637[1]
  return i1636
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1639 = data
  i1638.xPlacement = i1639[0]
  i1638.yPlacement = i1639[1]
  i1638.xAdvance = i1639[2]
  i1638.yAdvance = i1639[3]
  return i1638
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

Deserializers.creativeName = "Coin-Clicker-Playable";

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

Deserializers.buildID = "952c4eec-ced4-4b19-8168-00307600cc05";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["Unity","Burst","BurstCompiler","ResetStaticsOnLoad"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


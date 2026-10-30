param(
    [Parameter(Mandatory = $true)][string]$UnityEditor,
    [string]$ApkPath = ''
)
$ErrorActionPreference = 'Stop'
$projectPath = Split-Path $PSScriptRoot -Parent
if (-not $ApkPath) { $ApkPath = Join-Path $projectPath 'Builds\FlappyCometAds.apk' }
$buildPath = Join-Path $projectPath 'Builds'
New-Item -ItemType Directory -Force -Path $buildPath | Out-Null
$env:FLAPPY_APK_PATH = [IO.Path]::GetFullPath($ApkPath)
$logPath = Join-Path $buildPath 'android-build.log'
$arguments = @('-batchmode', '-quit', '-buildTarget', 'Android', '-projectPath', ('"' + $projectPath + '"'), '-executeMethod', 'AdsBuild.BuildAndroid', '-logFile', ('"' + $logPath + '"'))
$buildProcess = Start-Process -FilePath $UnityEditor -ArgumentList $arguments -WindowStyle Hidden -PassThru
$buildProcess.WaitForExit()
if ($buildProcess.ExitCode -ne 0 -or -not (Test-Path -LiteralPath $ApkPath)) { throw "Build failed. See $logPath" }
Write-Output "APK: $ApkPath"

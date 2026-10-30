param(
    [string]$Adb = 'adb',
    [Parameter(Mandatory = $true)][string]$Serial,
    [ValidateRange(1, 180)][int]$Seconds = 120,
    [string]$OutputPath = ''
)
$ErrorActionPreference = 'Stop'
if (-not $OutputPath) { $OutputPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'Recordings\android-test.mp4' }
New-Item -ItemType Directory -Force -Path (Split-Path ([IO.Path]::GetFullPath($OutputPath)) -Parent) | Out-Null
$devicePath = '/sdcard/flappy-comet-test.mp4'
Write-Output "Recording $Serial for $Seconds seconds. Perform the test in the app."
& $Adb -s $Serial shell screenrecord --time-limit $Seconds --bit-rate 4000000 $devicePath
if ($LASTEXITCODE -ne 0) { throw 'screenrecord failed' }
& $Adb -s $Serial pull $devicePath $OutputPath
if ($LASTEXITCODE -ne 0) { throw 'Recording download failed' }
Write-Output "Recording: $OutputPath"

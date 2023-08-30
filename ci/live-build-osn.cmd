set RuntimeURL=https://artifacts.electronjs.org/headers/dist
set RuntimeName=iojs
set ElectronVersion=17.4.11
set SLBuildDirectory=build
set SLGenerator=Visual Studio 17 2022
set SLDistributeDirectory=distribute
set SLFullDistributePath="%SLBuildDirectory%\%SLDistributeDirectory%"
set LibOBSVersion="28.2.50"
set ReleaseName=release

@echo on

call yarn install

call yarn add electron@%ElectronVersion% -D

git submodule update --init --recursive

call ./ci/configure-osn.cmd

call ./ci/build-osn.cmd

:: yarn run test

:: yarn install && git submodule update --init --recursive --force && cmake -Bbuild -H. -G"Visual Studio 17 2022" -A"x64" -DCMAKE_INSTALL_PREFIX="./distribute/obs-studio-node" -DLIBOBS_BUILD_TYPE="release" -DCMAKE_PREFIX_PATH=%CD%/build/libobs-src/cmake/ && cmake --build build --target install --config release
:: -DOSN_LIBOBS_URL="D:/Work/obs-studio/build/obs-studio-x64-27.1.3-462-g98457ed50-modified.7z"
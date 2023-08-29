
RuntimeURL=https://artifacts.electronjs.org/headers/dist
RuntimeName=iojs
ElectronVersion="17.4.11"
SLBuildDirectory=streamlabs-build
SLGenerator="Visual Studio 16 2019"
SLDistributeDirectory=distribute
SLFullDistributePath="\$(SLBuildDirectory)\\\$(SLDistributeDirectory)"
LibOBSVersion=28.2.50

BuildConfig=RelWithDebInfo
ReleaseName=release
Architecture=x86_64

# ./ci/install-dependencies-osx.sh
# Install system dependencies
brew update
brew doctor
brew install cmake
brew install python
brew install node@14
export PATH="/usr/local/opt/node@14/bin:$PATH"
node -v

# Install module dependencies
yarn install
yarn add electron@$ElectronVersion -D

git submodule update --init --recursive

# ./ci/configure-osn-osx.sh
mkdir $SLBuildDirectory
cd $SLBuildDirectory
mkdir $SLDistributeDirectory
cd $SLDistributeDirectory
mkdir obs-studio-node
cd ..

[ -n "$Architecture" ] && CMAKE_OSX_ARCHITECTURES_PARAM="-DCMAKE_OSX_ARCHITECTURES=$Architecture" || CMAKE_OSX_ARCHITECTURES_PARAM=""

cmake .. \
-DCMAKE_INSTALL_PREFIX=$PWD/$SLDistributeDirectory/obs-studio-node \
-DSTREAMLABS_BUILD=OFF \
-DNODEJS_NAME=$RuntimeName \
-DNODEJS_URL=$RuntimeURL \
-DNODEJS_VERSION=v$ElectronVersion \
-DLIBOBS_BUILD_TYPE=$ReleaseName \
-DCMAKE_BUILD_TYPE=$BuildConfig \
$CMAKE_OSX_ARCHITECTURES_PARAM \
-G Xcode

cd ..

# ./ci/build-osn-osx.sh
cmake --build $SLBuildDirectory --target install --config $BuildConfig

#yarn run test

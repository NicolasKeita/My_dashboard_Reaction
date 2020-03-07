FROM gradle:5.4.1

USER root

ENV SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip"
ENV ANDROID_HOME="/usr/src/android-sdk/"
ENV ANDROID_VERSION=28
ENV ANDROID_BUILD_TOOLS_VERSION=27.0.3

# Download Android SDK
RUN mkdir "$ANDROID_HOME" .android \
    && cd "$ANDROID_HOME" \
    && curl -o sdk.zip $SDK_URL \
    && unzip sdk.zip \
    && rm sdk.zip \
    && mkdir "$ANDROID_HOME/license" || true \
    && echo "24333f8a63b6825ea9c5514f83c2829b004d1fee" > "$ANDROID_HOME/licenses/android-sdk-license"
# && yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses

# Install Android Build Tool (gradle)

RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_VERSION}" \
    "platform-tools"

# Install Build Essentials

RUN apt-get update && apt-get install build-essential -y && apt-get install file -y && apt-get install apt-utils -y



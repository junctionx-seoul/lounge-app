import { WebView } from 'react-native-webview';
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Text } from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

type Pose =
  | 'PHOTOBOOTH_ONE_383'
  | 'PHOTOBOOTH_ONE_480'
  | 'PHOTOBOOTH_ONE_379'
  | 'PHOTOBOOTH_ONE_471'
  | 'PHOTOBOOTH_ONE_362'
  | 'PHOTOBOOTH_ONE_455'
  | 'PHOTOBOOTH_ONE_386'
  | 'PHOTOBOOTH_ONE_500'
  | 'PHOTOBOOTH_ONE_425'
  | 'PHOTOBOOTH_ONE_478'
  | 'PHOTOBOOTH_ONE_431'
  | 'PHOTOBOOTH_ONE_470'
  | 'PHOTOBOOTH_ONE_461'
  | 'PHOTOBOOTH_ONE_506'
  | 'PHOTOBOOTH_ONE_429'
  | 'PHOTOBOOTH_ONE_450'
  | 'PHOTOBOOTH_ONE_509'
  | 'PHOTOBOOTH_ONE_469'
  | 'PHOTOBOOTH_ONE_422'
  | 'PHOTOBOOTH_ONE_457'
  | 'PHOTOBOOTH_ONE_428'
  | 'PHOTOBOOTH_ONE_464'
  | 'PHOTOBOOTH_ONE_463'
  | 'PHOTOBOOTH_ONE_462'
  | 'PHOTOBOOTH_ONE_495'
  | 'PHOTOBOOTH_ONE_499'
  | 'PHOTOBOOTH_ONE_477'
  | 'PHOTOBOOTH_ONE_493'
  | 'PHOTOBOOTH_ONE_440';

const getRenderedZepeto = (pose: Pose, zepetoId: string) => {
  return axios
    .post(
      `https://render-api.zepeto.io/v2/graphics/zepeto/booth/${pose}?permanent=true`,
      JSON.stringify({
        type: 'booth',
        width: 720,
        target: {
          hashCodes: [zepetoId],
        },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((e) => e.data.url);
};

const RendererTest = () => {
  const shotRef = useRef<ViewShot | null>();
  useEffect(() => {
    (async () => {
      if (!shotRef.current?.capture) return;
      RNFS.moveFile(
        await shotRef.current.capture(),
        RNFS.DocumentDirectoryPath + '/example.png',
      );
    })();
  }, [shotRef]);
  return (
    <>
      <Text>Canvas Test</Text>
      <ViewShot
        ref={(r) => (shotRef.current = r)}
        captureMode="continuous"
        style={{ width: '100%', height: '80%' }}
      >
        <WebView
          source={{
            html: `
          <style>
          div {
            perspective: 200px;
            
          }
          div * {
            position: absolute;
          }
          #art {
            transform: rotateY(-6deg);
            width: 80%;
            left: 30px;
            top: 100px;
          }
          #zepeto {
            width: 60%;
            top: 200px;
            left: 0px;
          }
          #bg {
            z-index: -10;
            width: 100%;
          
        }
        </style>
        <div>
          <img src="https://t1.daumcdn.net/cfile/tistory/0120C63E51B1ED2201" id="art" />
          <img src="https://render-cdn.zepeto.io/20201011/07/39mqwDsd5O2FlKVVsq" id="zepeto">
          <img id="bg" src ="https://i.imgur.com/Q10KJYi.png" >
        </div>
          `,
          }}
        />
      </ViewShot>
    </>
  );
};

export default RendererTest;

import React, {
   useRef,
   useCallback,
   useEffect,
   Suspense
} from 'react';
import {
   ViewerApp,
   AssetManagerPlugin,
   TonemapPlugin,
   CanvasSnipperPlugin,
   addBasePlugins

} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation.js';
import Loading from './Loading.jsx';

gsap.registerPlugin(ScrollTrigger);

function Webgi3D() {
   const canvasRef = useRef(null);

   const memoizedScrollAnimation = useCallback(
      (position, target, onUpdate) => {
         if (position && target && onUpdate) {
            scrollAnimation(position, target, onUpdate);
         }
      }, []
   );

   const setupViewer = useCallback(async () => {

      const viewer = new ViewerApp({
         canvas: canvasRef.current,
      })

      const manager = await viewer.addPlugin(AssetManagerPlugin)

      const camera = viewer.scene.activeCamera;
      const position = camera.position;
      const target = camera.target;
      const onUpdate = () => {
         needUpdate = true;
         viewer.setDirty();
      };

      await addBasePlugins(viewer);

      await viewer.addPlugin(CanvasSnipperPlugin)

      viewer.renderer.refreshPipeline()

      await manager.addFromPath("scene-2.glb")

      viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

      camera.setCameraOptions({ controlsEnabled: false });
      window.scrollTo(0, 0);

      let needUpdate = true;

      viewer.addEventListener("preFrame", () => {
         if (needUpdate) {
            camera.positionTargetUpdated(true)
            needUpdate = false;
         }
      });

      memoizedScrollAnimation(position, target, onUpdate);
   }, []);

   useEffect(() => {
      setupViewer();
   }, [setupViewer]);
   return (
      <Suspense fallback={<Loading/>}>
         <div className='fixed flex w-screen h-screen bg-transparent flex-col items-center justify-end z-10 pointer-events-none'>
            <canvas className='h-screen w-full bg-transparent' ref={canvasRef} />
         </div>
      </Suspense>
   );
}

export default Webgi3D;